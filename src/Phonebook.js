import React, { useState } from 'react'

const Phonebook = (props) => {
   // console.log(props.personList)
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    const addPerson = (event) => {
        event.preventDefault();
        //console.log(event.target.value)
        const newPerson = {
          name: newName,
          id: props.personList.length + 1,
          phone: newNumber
        }
    
        const namedPerson = props.personList.filter(person =>
          person.name.toLocaleLowerCase().trim() ===
          newPerson.name.toLocaleLowerCase().trim());
        console.log(namedPerson);
        if (namedPerson.length !== 1) {
         props.setPersons(props.personList.concat(newPerson));
        } else {
          alert(`${newPerson.name} is already in the phonebook`)
        }
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

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>            
                <h3>Add new person</h3>
                <div> name: <input value={newName} onChange={handlePersonChange} /> </div>
                <div> phone number: <input value={newNumber} onChange={handlePhoneNumber} /> </div>
                <div>  <button type="submit">add</button>  </div>
            </form>

        </div>
    )
}


export default Phonebook