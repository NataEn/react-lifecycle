import React, { Component } from "react";
// import Button from "../MyButton/MyButton";
import { Card, Button } from "react-bootstrap";

export default class MyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
    };
  }
  updateTitle = () => {
    this.setState({ title: `my new title is ${this.props.index}` }, () =>
      console.log("title is updated")
    );
  };
  componentDidUpdate(prevProps, prevState) {
    console.log("after component update");
    console.log(prevProps, prevState);
  }

  componentDidMount() {
    console.log(`card of index ${this.props.index} is mounted in the dom `);
  }
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
