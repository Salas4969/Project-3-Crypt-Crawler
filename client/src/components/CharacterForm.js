import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap'
import {useState} from 'react';
import { FormSelect } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ADD_CHARACTER } from '../utils/mutations.js'
import { useMutation } from '@apollo/client'

const CharacterForm = (props) => {

  const dummyCharacters = [
    {
 
      attack:15,
      HP:8             
    },
    // {
  
    //   attack: 11,
    //   HP: 11
    // }
  ]

  const [charType, setCharType] = useState(0)
  const [charName, setCharName] = useState('')

  const [addCharacter, {error}] = useMutation(ADD_CHARACTER)

const nameHandler = (event) => {
   const {value} = event.target
   setCharName(value)
}

const typeHandler = (event) => {
  const {value} = event.target
  setCharType(value)
}

const saveCharacter = async () => {
  console.log(dummyCharacters[0].HP)
  let newCharacter = {
    name: charName,
    HP: dummyCharacters[0].HP,
    attack: dummyCharacters[0].attack,
  }

  console.log(newCharacter)
  try {
    const {data} = await addCharacter({
      variables: { ...newCharacter }
    })
    console.log(data)
  } catch(error){
    console.error(error)
  }

}

return (
<div class="character-form">

<div class="character-questions">Choose a character:</div>

{/* <FloatingLabel controlId="floatingSelect" label="Works with selects" */}

<FormSelect onChange={typeHandler} aria-label="Floating label select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Saved Character Gandalf</option>
  <option value="4">Saved Character Goku</option>
</FormSelect>


<div class="character-questions">Choose a weapon:</div>

<FormSelect aria-label="Floating label select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</FormSelect>

<div class="character-questions">Name your character:</div>

  <input onChange={nameHandler}></input>
      <button onClick={saveCharacter} class="character-start-button">  Start Game</button>

{/* </FloatingLabel> */}
</div>
 )
   

} 

export default CharacterForm;
