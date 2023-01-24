import React from "react";

const List = ({ people }) => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  return (
    <>

      {people.map((person) => {
        const { id, name, image, birthDay, birthMonth, birthYear } = person;




        if (day === birthDay && month + 1 === birthMonth) {
          return (

            <article key={id} className="person">
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{year - birthYear} years</p>
              </div>
            </article>
          );
        }
        return <></>;
      })}


    </>


  );
};

export default List;
