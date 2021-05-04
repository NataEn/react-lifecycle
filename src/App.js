import "./App.css";
import Card from "./components/MyCard/MyCard";
import { Button } from "react-bootstrap";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted_1: true,
      isMounted_2: true,
      isMounted_3: true,
      isMounted_4: true,
    };
  }

  removeFromDom = (index) => {
    this.setState({ [`isMounted_${index}`]: false }, () =>
      console.log(` removed card number ${index}`)
    );
  };

  render() {
    return (
      <div className="App">
        <p>Hello react</p>
        <div>
          {this.state.isMounted_1 && <Card index={1} />}
          <Button onClick={(e) => this.removeFromDom(1)}>delete me</Button>
        </div>

        <div>
          {this.state.isMounted_2 && <Card index={2} />}
          <Button onClick={(e) => this.removeFromDom(2)}>delete me</Button>
        </div>
        <div>
          {this.state.isMounted_3 && <Card index={3} />}
          <Button onClick={(e) => this.removeFromDom(3)}>delete me</Button>
        </div>
        <Card index={4} />
      </div>
    );
  }
}

export default App;
