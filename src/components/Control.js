import React, { Component } from "react";

class Control extends Component {
  render() {
    const { onChangeMode, mode } = this.props;

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
          {mode === "welcome" ? (
            <li>
              <a
                href="/welcome_update"
                data-name="welcomeupdate"
                onClick={function(e) {
                  e.preventDefault();
                  onChangeMode(e.target.dataset.name);
                }}
              >
                welcome update
              </a>
            </li>
          ) : (
            <li>
              <a
                href="/contents_update"
                data-name="update"
                onClick={function(e) {
                  e.preventDefault();
                  onChangeMode(e.target.dataset.name);
                }}
              >
                contents update
              </a>
            </li>
          )}

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
