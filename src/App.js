import React, { Component } from "react";
import "./App.css";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";

class App extends Component {
  constructor(props) {
    super(props);
    // Component의 값을 초기화
    this.state = {
      subject: {
        title: "WEB",
        sub: "World Wide Web!"
      },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is HyperText..." },
        { id: 2, title: "CSS", desc: "CSS is for Design" },
        { id: 3, title: "JS", desc: "JS is for interactive" }
      ]
    };
  }
  render() {
    const { subject, contents } = this.state;
    return (
      <>
        <Subject title={subject.title} sub={subject.sub} />
        <TOC data={contents} />
        <Content title="HTML" desc="HTML is Hyper Text Markup Language." />
      </>
    );
  }
}

export default App;
