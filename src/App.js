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
      mode: "read",
      subject: {
        title: "WEB",
        sub: "World Wide Web!"
      },
      welcome: { title: "welcome", desc: "Hello, React!!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for Information" },
        { id: 2, title: "CSS", desc: "CSS is for Design" },
        { id: 3, title: "JS", desc: "JS is for interactive" }
      ]
    };
  }
  render() {
    console.log("App render");
    let _title,
      _desc = null;
    const { mode, subject, welcome, contents } = this.state;
    if (mode === "welcome") {
      _title = welcome.title;
      _desc = welcome.desc;
    } else if (mode === "read") {
      _title = contents[0].title;
      _desc = contents[0].desc;
    }
    console.log("render", this);
    return (
      <>
        <Subject
          title={subject.title}
          sub={subject.sub}
          onClickSubject={function() {
            alert("click Subject");
            this.setState({
              mode: "welcome"
            });
          }.bind(this)}
        />
        <TOC
          onClickTOC={function() {
            alert("click TOC");
            this.setState({
              mode: "read"
            });
          }.bind(this)}
          data={contents}
        />
        <Content title={_title} desc={_desc} />
      </>
    );
  }
}

export default App;
