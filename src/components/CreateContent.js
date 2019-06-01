import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    console.log("Contents render");
    const { title, desc } = this.props;
    return (
      <article>
        <h2>Create</h2>
        <form />
      </article>
    );
  }
}

export default CreateContent;
