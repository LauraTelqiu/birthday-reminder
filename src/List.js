import { useState } from "react";

const List = ({ people }) => {
  return (
    <>

      {/* <h3>{people.length} birthdays today</h3> */}
      {people.map((person) => {
        const { id, name, image, birthDay, birthMonth, birthYear } = person;
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();



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
      })}
    </>

  );
};

export default List;
