import React, { Component } from "react";

class Content extends Component {
  render() {
    console.log("Contents render");
    const { title, desc } = this.props;
    return (
      <article>
        <h2>{title}</h2>
        <p>{desc}</p>
      </article>
    );
  }
}

export default Content;
