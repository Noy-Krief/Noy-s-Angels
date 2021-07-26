import React, { useState } from 'react';
import Popup from './Popup';
import './App.css';
import { Timeline, Bookmark } from 'react-vertical-timeline';

function App() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div className="App">
      <header className="App-header">
        <button className="profile" onClick={togglePopup}>My Profile</button>
      </header>
    {isOpen && <Popup
      content={<>
        <h2>Hello Doron</h2>
        <table className="details">
          <tr>
            <th>Job Title:</th>
            <th>DevOps</th>
          </tr>
          <tr>
            <th>Rank:</th>
            <th>Private</th>
          </tr>
        </table>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}

export default App;
