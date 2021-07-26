import logo from './images/gal.png';
import './App.css';
import React, { Component, useState} from "react";
import background from './images/maslul.png';
import hafifa from './images/hafifa.png';
import rabat from './images/rabat.png';
import Popup from './Popup';
import samal from './images/samal.png';
import samar from './images/samar.png';
import money from './images/money.png'

const day = 1300 ;

function ProfileCard() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div className="App">
      <header className="App-header">
        <button className="profile" onClick={togglePopup}>הפרופיל שלי</button>
      </header>
    {isOpen && <Popup
      content={<>
        <h2>!היי דורון</h2>
        <table className="details">
          <tr>
            <th>מקצוע:</th>
            <th>DevOps</th>
          </tr>
          <tr>
            <th>דרגה:</th>
            <th>טוראי</th>
          </tr>
          <tr>
            <th>פז"מ:</th>
            <th>{day}</th>
          </tr>
        </table>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}

function HafifaCard() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div className="App">
      <img src={hafifa} alt="hafifa" className="logo hafifa" onClick={togglePopup}></img>
    {isOpen && <Popup
      content={<>
        <h2>חפיפה</h2>
        <p>כניסה לענן: מזל טוב על כניסתכם לענן! לפני הכל תשקיעו זמן על להכיר את הנחפפים שאיתכם שהולכים להיות החברים הכי טובים שלכם בתקופה הקרובה וכמובן את שאר האנשים בענף. במהלך החפיפה יש רש"צ אחראי שהוא המפקד שלכם בתקופת החפיפה. בנוסף אליו לכל חייל יש חופף אישי שחופף אותו מקצועית. החפיפה עצמה נמצאת בגיט בקישור: https://gitlab.com/matarp13/the-hitchikers-guide-to-the-cts במהלך החפיפה תתבקשו להכין הרצאה של 15 דקות על נושא מסוים.</p>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}
function RabatCard() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div className="App">
      <img src={rabat} alt="rabat" className="logo rabat" onClick={togglePopup}></img>
    {isOpen && <Popup
      content={<>
        <h2>רב"ט</h2>
        <p>מזל טוב! קצת פחות צעירים עכשיו</p>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}
function SamalCard() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div className="App">
      <img src={samal} alt="samal" className="logo samal" onClick={togglePopup}></img>
    {isOpen && <Popup
      content={<>
        <h2>סמל</h2>
        <p>נקודת ציון משמעותית, הרבה על הכתפיים עכשיו</p>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}
function SamarCard() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div className="App">
      <img src={samar} alt="samar" className="logo samar" onClick={togglePopup}></img>
    {isOpen && <Popup
      content={<>
        <h2>סמ"ר</h2>
        <p>פז"מוזאור</p>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}
function MoneyCard() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div className="App">
      <img src={money} alt="money" className="logo money" onClick={togglePopup}></img>
    {isOpen && <Popup
      content={<>
        <h2>כניסה לקבע</h2>
        <p> שימו לב שביום הראשון לקבע יש להחליף חוגר (במידה ואתם קצינים אין צורך) ומה עם חבר? את כרטיס החבר ניתן להזמין מה4 לחודש שאחרי הכניסה שלכם לקבע מאתר חבר</p>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}
class App extends Component {
// Create state
state = {
  xoffset: 280, yoffset: 40
  //xoffset: 0, yoffset: 0
};

second_state = {
  xoffset: 900, yoffset: 180
}
nagad_state = {
  xoffset: 200, yoffset: 300
}
officer_state = {
  xoffset: 200, yoffset: 480
}
malshin = false;

move = () => {
  // var left = day % 100;
  // var top = Math.floor(day / 100);
  // var dir;
  // dir = top % 2 == 0 ? dir=1 : dir=-1;
  // this.setState({ 
  //   yoffset: top == 0 ? this.state.yoffset : 10*(top),
  //   xoffset: dir == 1 ? 1100 * (left/100) : 1100 - (1100 * (left/100))
  // });
  if (day <= 600) {
      this.setState({ 
      xoffset: this.state.xoffset + day
  });
  }
  else if (day > 600 && day <= 1200) {
    this.setState({ 
      xoffset: this.second_state.xoffset - (day-600),
      yoffset: this.second_state.yoffset
  });
  }
  else if (day > 1200 && day <= 1800 && this.malshin) {
    this.setState({ 
      xoffset: this.officer_state.xoffset + (day-1200),
      yoffset: this.officer_state.yoffset
  });
  }
  else if (day > 1200 && day <= 1800 && !this.malshin) {
    this.setState({ 
      xoffset: this.nagad_state.xoffset + (day-1200),
      yoffset: this.nagad_state.yoffset
  });
  }
}

render() {
	return (
	<div className="App App-header" style={{ backgroundImage: `url(${background})` }}>
    <ProfileCard></ProfileCard>
		<HafifaCard></HafifaCard>
    <RabatCard></RabatCard>
    <SamalCard></SamalCard>
    <SamarCard></SamarCard>
    <MoneyCard></MoneyCard>
    <img 
    src={logo}
    className="App-logo"
    alt="logo"
    onlo
		style={{
			position: "absolute",
			left: `${this.state.xoffset}px`,
			top: `${this.state.yoffset}px`,
		}}>
		</img>
    <button onClick={this.move} className="profile move">מקם אותי במפה</button>
	</div>
	);
}

}
export default App;
