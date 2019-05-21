import React, { Component } from "react";

class TOC extends Component {
  render() {
    const { data } = this.props;
    let lists = [];
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      lists.push(
        <li key={data[i].id}>
          <a href={`/content/${data[i].id}`}>{data[i].title}</a>
        </li>
      );
    }
    console.log(lists);
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
