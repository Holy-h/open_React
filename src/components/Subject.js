import React, { Component } from "react";

class Subject extends Component {
  render() {
    console.log("Subject render");
    const { title, sub, onChangeMode } = this.props;
    return (
      <header>
        <h1>
          <a
            href="/"
            onClick={function(e) {
              e.preventDefault();
              onChangeMode("welcome");
            }}
          >
            {title}
          </a>
        </h1>
        <p>{sub}</p>
      </header>
    );
  }
}

export default Subject;
