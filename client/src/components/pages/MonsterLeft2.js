import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import minotaurImg from '../../assets/round2LeftBattle.png'
import { Redirect } from 'react-router'
import {  Modal } from 'react-bootstrap';



//import the stats or make dummy data?
//dummy data
const dummyCharacters = {
    name: "dummy",
    attack: 25,
    HP: 15,
  };
  
  const Monster = {
    name: "orc",
    HP: 50,
    smallAttack: 3,
    bigAttack: 15,
  };



const MonsterBattle = (props) => {
//set up use states
    const [monsterAttack, setmonsterAttack] = useState(0);
    const [characterHP, setCharacterHP] = useState(dummyCharacters.HP);
    
//enemy attacks
const orcAttacks = () => {
  var number = Math.floor(Math.random() * 2);
  console.log(number);
  if (number === 1) {
    setmonsterAttack(Monster.bigAttack);
  } else {
    setmonsterAttack(Monster.smallAttack);
  }
};

const [MonsterHP, setMonsterHP] = useState(Monster.HP);
const attack = (event) => {
  // event.preventDefault()
  console.log("attacks");
  setMonsterHP(MonsterHP - dummyCharacters.attack);
  orcAttacks();

  setCharacterHP(characterHP - monsterAttack);
};

//player blocks monster's attack
const block = (event) => {
    console.log('blocks')
    setCharacterHP(characterHP - 1)
    orcAttacks()
}

//if monster is defeated
if (characterHP < 1) {
    return <Redirect to='/'/>
} else if (MonsterHP < 1) {
    return (
        <Modal 
        size='lg'
        show
        >

            <Modal.Title>You have defeated the minotaur!
                You acquire the minotaur's great scithe, and gain plus 15 in your attack!
            </Modal.Title>
            <button><Link to='/lastRound'>Keep Exploring</Link>  </button>
            
        </Modal>
    )
}

    return (
      <div>
        <div class="info">
          <div>
            {MonsterHP}/{Monster.HP}HP
          </div>

          <div>The minotaur is attacking {monsterAttack}</div>
          <div>
            Your HP {characterHP}/{dummyCharacters.HP}
          </div>

          <button class="btn-monster attack" onClick={() => attack()}>
            Attack
          </button>
          <button class="btn-monster block" onClick={() => block()}>
            Block
          </button>
        </div>
        <img class="minotaurImg" src={minotaurImg}></img>
      </div>
    );
}

export default MonsterBattle;