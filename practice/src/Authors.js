import React, { useState, useEffect } from 'react';

const Posts = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonData = await response.json();

        const postWithAuthorData = [];
        for (const post of jsonData) {
          const authorResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
          const authorData = await authorResponse.json();
          const postWithAuthor = { ...post, author: authorData };
          postWithAuthorData.push(postWithAuthor);
        }

        setPostData(postWithAuthorData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <main>
      <h1>Posts</h1>
      <p>Below this tag, lets render some posts</p>
      <div id="posts" className="posts">
        <ul>
          {postData.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <p>Author: {post.author.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Posts;
