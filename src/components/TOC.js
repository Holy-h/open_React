import React, { Component } from "react";

class TOC extends Component {
  shouldComponentUpdate(newProps, newState) {
    console.log("TOC ShouldComponentUpdate", newProps.data, this.props.data);
    if (newProps.data !== this.props.data) {
      return true;
    }
    return false;
  }
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
