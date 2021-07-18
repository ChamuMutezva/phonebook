import React, { useState, useEffect } from 'react';
import Phonebook from './Phonebook';
import axios from 'axios';
import './App.css';

const App = () => {
  const [persons, setPersons] = useState([])
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    console.log("effect")
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
  }, [])

  const filterData = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
    //filterResults()
  }

  const filterResults = persons.filter(person => {
  /* if (person.name.includes(searchTerm)) {
      console.log(person);            
     // console.log(person.name, person.phone);
      return <h4 key={person.id}>  name={person.name} phone={person.phone} </h4>
    }
    return null*/
    return person.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
  .map(person => <h4 key={person.id}>  {person.name} : {person.phone} </h4>)



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
        <h5>Filtered results</h5>
        {filterResults} 
      </div>
    </div>
  )

}
export default App;
