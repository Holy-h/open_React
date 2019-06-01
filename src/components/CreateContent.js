import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    console.log("Contents render");
    const { onSubmitCreate } = this.props;
    return (
      <article>
        <h2>Create</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={function(e) {
            const { title, desc } = e.target;
            e.preventDefault();
            onSubmitCreate(title.value, desc.value);
          }}
        >
          <p>
            <input type="text" name="title" placeholder="Title" />
          </p>
          <p>
            <textarea name="desc" placeholder="Description" />
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
      </article>
    );
  }
}

export default CreateContent;
