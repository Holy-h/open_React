import React, { Component } from "react";

class Subject extends Component {
  render() {
    console.log(this.props);
    const { title, sub } = this.props;
    return (
      <header>
        <h1>{title}</h1>
        <p>{sub}</p>
      </header>
    );
  }
}

export default Subject;
