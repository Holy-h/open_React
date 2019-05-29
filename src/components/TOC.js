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
            data-id={data[i].id}
            onClick={function(e) {
              e.preventDefault();
              onClickTOC(e.target.dataset.id);
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
