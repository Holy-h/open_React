import React, { Component } from "react";

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.data.title,
      desc: this.props.data.desc
    };
  }

  inputFormHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { title, desc } = this.state;
    const { onSubmitUpdate } = this.props;
    return (
      <article>
        <h2>Update</h2>
        <form
          action="/update_process"
          method="post"
          onSubmit={function(e) {
            const { title, desc } = e.target;
            e.preventDefault();
          }}
        >
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
