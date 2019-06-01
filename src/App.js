import React, { Component } from "react";
import "./App.css";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Control from "./components/Control";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";

class App extends Component {
  constructor(props) {
    super(props);
    // Component의 값을 초기화
    this.state = {
      mode: "create",
      selected_content_id: 1,
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
      _desc,
      _article = null;

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
      _article = <ReadContent title={_title} desc={_desc} />;
    } else if (mode === "read") {
      for (let i = 0; i < contents.length; i++) {
        let data = contents[i];
        if (data.id === selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          _article = <ReadContent title={_title} desc={_desc} />;
          break;
        }
      }
    } else if (mode === "create") {
      _article = (
        <CreateContent
          onSubmitCreate={function(_title, _desc) {
            const _id = contents.length + 1;

            // Array.from();
            // let _contents = Array.from(contents);
            // _contents.push({ id: _id, title: _title, desc: _desc });

            // concat
            const _contents = contents.concat({
              id: _id,
              title: _title,
              desc: _desc
            });
            console.log(_contents);

            this.setState({
              contents: _contents
            });
          }.bind(this)}
        />
      );
    } else {
      alert("mode error");
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
        {_article}
      </>
    );
  }
}

export default App;
