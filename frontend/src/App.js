import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import background from './Maslol.png';

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
day = 1800 ;
malshin = true;

move = () => {
  // var left = this.day % 100;
  // var top = Math.floor(this.day / 100);
  // var dir;
  // dir = top % 2 == 0 ? dir=1 : dir=-1;
  // this.setState({ 
  //   yoffset: top == 0 ? this.state.yoffset : 10*(top),
  //   xoffset: dir == 1 ? 1100 * (left/100) : 1100 - (1100 * (left/100))
  // });
  if (this.day <= 600) {
      this.setState({ 
      xoffset: this.state.xoffset + this.day
  });
  }
  else if (this.day > 600 && this.day <= 1200) {
    this.setState({ 
      xoffset: this.second_state.xoffset - (this.day-600),
      yoffset: this.second_state.yoffset
  });
  }
  else if (this.day > 1200 && this.day <= 1800 && this.malshin) {
    this.setState({ 
      xoffset: this.officer_state.xoffset + (this.day-1200),
      yoffset: this.officer_state.yoffset
  });
  }
  else if (this.day > 1200 && this.day <= 1800 && !this.malshin) {
    this.setState({ 
      xoffset: this.nagad_state.xoffset + (this.day-1200),
      yoffset: this.nagad_state.yoffset
  });
  }
}

render() {
	return (
	<div className="App App-header" style={{ backgroundImage: `url(${background})` }}>
		<img 
    src={logo}
    className="App-logo"
    alt="logo"
    onlo
		style={{
			position: "absolute",
			left: `${this.state.xoffset}px`,
			top: `${this.state.yoffset}px`,
		}}
		></img>
    <button onClick={this.move}>Click Me</button>
	</div>
	);
}
}

export default App;
