import React from 'react';
import { Link } from 'react-router-dom';
import winningImg from '../../assets/winningImg.PNG'



const WinnerPage = (props) => {


    return (
      <div
        class="winPageImage"
        style={{ backgroundImage: `url(${winningImg})` }}
      >
        <form action="/action_page.php" class="round1form">
          <h2>
            At your last strength you see the glimmering light of escape. Congratulations on journeying these caves. 
          </h2>

          
          <button type="submit" class="round1btns">
            <Link to="/">Homepage</Link>
          </button>
        </form>
      </div>
    );
}

export default WinnerPage;