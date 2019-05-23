import React, { Component } from "react";

class Subject extends Component {
  render() {
    console.log("Subject render");
    const { title, sub } = this.props;
    return (
      <header>
        <h1>
          <a href="/">{title}</a>
        </h1>
        <p>{sub}</p>
      </header>
    );
  }
}

export default Subject;
