import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fullfilled");
      setPersons(response.data);
    });
  }, []);

  console.log("render", persons.length, "persons");

  const displayedPersons = persons.filter((person) => {
    return person.name.toLowerCase().startsWith(nameFilter.toLowerCase());
  });

  const addPerson = (event) => {
    event.preventDefault();

    if (newName !== "") {
      const nameExists = persons.find((person) => person.name === newName);

      if (nameExists) {
        alert(`${newName} is already added to the phonebook`);
      } else {
        const newPerson = {
          name: newName,
          number: newNumber,
        };
        setPersons(persons.concat(newPerson));
      }
    }
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setNameFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={nameFilter} handleChange={handleFilterChange} />

      <h3>Add a new</h3>
      <PersonForm
        handleSubmit={addPerson}
        nameValue={newName}
        numberValue={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      <Persons persons={displayedPersons} />
    </div>
  );
};

export default App;
