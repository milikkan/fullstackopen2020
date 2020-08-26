import React from "react";

const Person = ({ name, number }) => (
  <li>
    {name} | {number}
  </li>
);

const Persons = ({ persons }) => {
  return (
    <ul>
      {persons.map((person) => (
        <Person key={person.name} name={person.name} number={person.number} />
      ))}
    </ul>
  );
};

export default Persons;
