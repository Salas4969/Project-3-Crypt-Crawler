import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import balrogImg from '../../assets/balrog.PNG'
import { Redirect } from 'react-router'
import { Modal} from 'react-bootstrap';



const dummyCharacters = {
    name: "dummy",
    attack: 15,
    HP: 15,
  };
  
  const Monster = {
    name: "balrog",
    HP: 300,
    smallAttack: 6,
    bigAttack: 200,
  };
  
  
  
  
  const FinalBattle = (props) => {
    const win=()=>{
      setMonsterHP(0)
    }
  
    const [monsterAttack, setmonsterAttack] = useState(0);
    const [characterHP, setCharacterHP] = useState(dummyCharacters.HP);
    const [MonsterHP, setMonsterHP] = useState(Monster.HP);
  
    const orcAttacks = () => {
      var number = Math.floor(Math.random() * 2);
      console.log(number);
      if (number === 1) {
        setmonsterAttack(Monster.bigAttack);
      } else {
        setmonsterAttack(Monster.smallAttack);
      }
    };
  
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
  
  if (characterHP < 1) {
      return <Redirect to='/'/>
  } else if (MonsterHP < 1) {
      return (
          <Modal 
          size='lg'
          show>
<<<<<<< HEAD
              <Modal.Title>You have defeated the mighty Balrog!
                  
=======
              <Modal.Title>You have defeated the Balrog! 
>>>>>>> 0718401bda4949e5b0866eb04a019a3022008c8d
              </Modal.Title>
              <button><Link to='/WinnerPage'>Continue</Link>  </button>
              
          </Modal>
      )
  }
  
    return (
      <div>
        <div>{MonsterHP}</div>
  
        <div>Balrog is attacking {monsterAttack}</div>
        <div>
          HP {characterHP}/{dummyCharacters.HP}
        </div>
  
        <button onClick={() => attack()}>Attack</button>
        <button onClick={()=> block()}>Block</button>
        <img src={balrogImg}></img>
        <button onClick={()=>win()}>Use Staff </button>
      </div>
    );
  };



export default FinalBattle;