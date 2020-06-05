import React, { useState } from 'react';
import Phonebook from './Phonebook';
import logo from './logo.svg';
import './App.css';

const Recovery = () => {
  const [persons, setPersons] = useState([
    { id: 0, name: 'Arto Hellas', phone: '+27832678210' }
  ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  ;
  const addPerson = (event) => {
    event.preventDefault();
    //console.log(event.target.value)
    const newPerson = {
      name: newName,
      id: persons.length + 1,
      phone: newNumber
    }

    const namedPerson = persons.filter(person =>
      person.name.toLocaleLowerCase().trim() ===
      newPerson.name.toLocaleLowerCase().trim());
    console.log(namedPerson);
    if (namedPerson.length !== 1) {
      setPersons(persons.concat(newPerson));
    } else {
      alert(`${newPerson.name} is already in the phonebook`)
    }
    console.log("Search term ", searchTerm)
    setNewName('');
    setNewNumber('');
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }
  const handlePhoneNumber = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);

  }
  const filterData = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
    persons.filter(person => {
      if (person.name.includes(event.target.value)) {
        console.log(person);

        setSearchResults(person)
        console.log(searchResults.name);
        return <h4 key={person.id}>{person.name}</h4>
      }

    })
  }


  return (
    <div>
      <Phonebook />
      <form onSubmit={addPerson}>
        <div>Filter by name <input onChange={filterData} /></div>
        <h3>Add new person</h3>
        <div> name: <input value={newName} onChange={handlePersonChange} /> </div>
        <div> phone number: <input value={newNumber} onChange={handlePhoneNumber} /> </div>
        <div>  <button type="submit">add</button>  </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person =>
          <h4 key={person.id}>
            {person.name} {person.phone}
          </h4>)
        }
      </div>
    </div>
  )

}
export default Recovery;
