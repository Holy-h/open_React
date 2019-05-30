import React, { Component } from "react";
import "./App.css";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Control from "./components/Control";

class App extends Component {
  constructor(props) {
    super(props);
    // Component의 값을 초기화
    this.state = {
      mode: "read",
      selected_content_id: 2,
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
    const {
      mode,
      subject,
      welcome,
      contents,
      selected_content_id
    } = this.state;

    if (mode === "welcome") {
      _title = welcome.title;
      _desc = welcome.desc;
    } else if (mode === "read") {
      for (let i = 0; i < contents.length; i++) {
        let data = contents[i];
        if (data.id === selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
      }
    }

    const onClickSubject = () => {
      this.setState({
        mode: "welcome"
      });
    };

    const onClickTOC = id => {
      this.setState({
        mode: "read",
        selected_content_id: Number(id)
      });
    };

    const onClickControl = _mode => {
      this.setState({
        mode: _mode
      });
    };

    return (
      <>
        <div>현재 모드: {mode}</div>
        <Subject
          title={subject.title}
          sub={subject.sub}
          onClickSubject={onClickSubject}
        />
        <TOC onClickTOC={onClickTOC} data={contents} />
        <Control onChangeMode={onClickControl} />
        <Content title={_title} desc={_desc} />
      </>
    );
  }
}

export default App;
