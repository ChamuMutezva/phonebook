import React, { useState } from 'react';
import Phonebook from './Phonebook';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [persons, setPersons] = useState([
    { id: 0, name: 'Arto Hellas', phone: '+27832678210' }
  ])
  const [searchTerm, setSearchTerm] = useState('');

  const filterData = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
    //filterResults()
  }

  const filterResults = persons.filter(person => {
      if (person.name.includes(searchTerm)) {
        console.log(person);
        // return person;       
        console.log(person.name, person.phone);
        return <h4 key={person.id}>  name={person.name} phone={person.phone} </h4>
      }
      return null
    })



  // console.log(persons);
  return (
    <div>
      <Phonebook personList={persons} setPersons={setPersons} />
      <div>Filter by name <input value={searchTerm} onChange={filterData} /></div>
      <h2>Numbers</h2>
      <div>
        {persons.map(person =>
          <h4 key={person.id}>
            {person.name} {person.phone}
          </h4>)
        }
      </div>
      <div>
        {searchTerm}
        {filterResults}
      </div>
    </div>
  )

}
export default App;
