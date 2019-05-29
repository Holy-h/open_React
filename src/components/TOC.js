import React, { Component } from "react";

class TOC extends Component {
  render() {
    console.log("TOC render");
    const { data, onClickTOC } = this.props;
    let lists = [];
    for (let i = 0; i < data.length; i++) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={`/content/${data[i].id}`}
            onClick={function(e) {
              e.preventDefault();
              onClickTOC();
            }}
          >
            {data[i].title}
          </a>
        </li>
      );
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
