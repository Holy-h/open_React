import React, { Component } from "react";
import "./App.css";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Control from "./components/Control";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

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

  getReadContent() {
    const { contents, selected_content_id } = this.state;

    for (let i = 0; i < contents.length; i++) {
      let data = contents[i];
      if (data.id === selected_content_id) {
        return data;
      }
    }
  }

  getContentComponent() {
    let _title,
      _desc,
      _article = null;

    const { mode, welcome, contents } = this.state;

    if (mode === "welcome") {
      _title = welcome.title;
      _desc = welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />;
    } else if (mode === "read") {
      const _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc} />;
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

            this.setState({
              contents: _contents
            });
          }.bind(this)}
        />
      );
    } else if (mode === "update") {
      const _content = this.getReadContent();
      _article = (
        <UpdateContent data={_content} onSubmitUpdate={function() {}} />
      );
    }
    return _article;
  }

  render() {
    console.log("App render");

    const { mode, subject, contents } = this.state;

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
        {this.getContentComponent()}
      </>
    );
  }
}

export default App;
