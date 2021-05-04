import React, { Component } from "react";
// import Button from "../MyButton/MyButton";
import { Card, Button } from "react-bootstrap";

export default class MyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      number: 0,
    };
  }

  updateTitle = (e) => {
    // console.log(e);
    let updatedNumber = ++this.state.number;
    this.setState(
      {
        title: `my new title is ${this.props.index}`,
        number: updatedNumber,
      },
      () => console.log("title is updated")
    );
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("after component update");
    console.log(prevProps, prevState);
  }

  componentDidMount() {
    console.log(`card of index ${this.props.index} is mounted in the dom `);
  }
  componentWillUnmount() {
    console.log(
      `card component is unmounted having number ${this.state.number}`
    );
  }
  render() {
    return (
      <Card style={{ width: "18rem", border: "1px solid black" }}>
        <Card.Body>
          <Card.Title>
            {this.state.title
              ? this.state.title
              : `Card number ${this.props.index}`}
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={this.updateTitle}>
            update card title
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
