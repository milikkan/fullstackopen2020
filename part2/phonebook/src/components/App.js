import React, { useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  const displayedPersons = persons.filter((person) => {
    return person.name.toLowerCase().startsWith(nameFilter);
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
