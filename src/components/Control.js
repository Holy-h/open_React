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
              data-name="create"
              onClick={function(e) {
                e.preventDefault();
                onChangeMode(e.target.dataset.name);
              }}
            >
              create
            </a>
          </li>
          <li>
            <a
              href="/update"
              data-name="update"
              onClick={function(e) {
                e.preventDefault();
                onChangeMode(e.target.dataset.name);
              }}
            >
              update
            </a>
          </li>
          <li>
            <input
              type="button"
              data-name="delete"
              value="delete"
              onClick={function(e) {
                e.preventDefault();
                onChangeMode(e.target.dataset.name);
              }}
            />
          </li>
        </ul>
      </>
    );
  }
}

export default Control;
