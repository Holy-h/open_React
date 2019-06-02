import React, { Component } from "react";

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    const {
      data: { id, title, desc }
    } = this.props;
    // props로 받은 값을 변경하기 위해 state에 대입
    this.state = {
      id: id,
      title: title,
      desc: desc
    };
  }

  inputFormHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { id, title, desc } = this.state;
    const { onSubmitUpdate } = this.props;
    return (
      <article>
        <h2>Update</h2>
        <form
          action="/update_process"
          method="post"
          onSubmit={function(e) {
            e.preventDefault();
            onSubmitUpdate(id, title, desc);
          }}
        >
          <input type="hidden" name="id" value={id} />
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={this.inputFormHandler.bind(this)}
            />
          </p>
          <p>
            <textarea
              name="desc"
              placeholder="Description"
              value={desc}
              onChange={this.inputFormHandler.bind(this)}
            />
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
