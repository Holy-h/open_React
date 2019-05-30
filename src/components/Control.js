import React, { Component } from "react";

class Control extends Component {
  render() {
    const { onChangeMode } = this.props;

    return (
      <>
        <h3>관리자 메뉴</h3>
        <ul>
          <li>
            <a
              href="/create"
              // className="create"
              onClick={function(e) {
                e.preventDefault();
                console.log(e.target.className);
                onChangeMode("create");
              }}
            >
              create
            </a>
          </li>
          <li>
            <a
              href="/update"
              onClick={function(e) {
                e.preventDefault();
                onChangeMode("update");
              }}
            >
              update
            </a>
          </li>
          <li>
            <input
              type="button"
              value="delete"
              onClick={function(e) {
                e.preventDefault();
                onChangeMode("delete");
              }}
            />
          </li>
        </ul>
      </>
    );
  }
}

export default Control;
