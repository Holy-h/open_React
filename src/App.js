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
      // mode: welcome, create, update, welcomeupdate, delete
      mode: "welcome",
      selected_content_id: 1,
      welcome: { id: 0, title: "welcome", desc: "Hello, React!!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for Information" },
        { id: 2, title: "CSS", desc: "CSS is for Design" },
        { id: 3, title: "JS", desc: "JS is for interactive" }
      ]
    };
  }

  subject = {
    title: "WEB1",
    sub: "World Wide Web!"
  };

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
    } else if (mode === "welcomeupdate") {
      console.log(welcome);
      _article = (
        <UpdateContent
          data={welcome}
          onSubmitUpdate={function(_id, _title, _desc) {
            console.log(_id, _title, _desc);

            this.setState({
              welcome: { id: _id, title: _title, desc: _desc },
              mode: "welcome"
            });
          }.bind(this)}
        />
      );
    } else if (mode === "read") {
      const _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc} />;
    } else if (mode === "create") {
      _article = (
        <CreateContent
          onSubmitCreate={function(_title, _desc) {
            const _id = contents.length + 1;

            // concat
            const _contents = contents.concat({
              id: _id,
              title: _title,
              desc: _desc
            });

            this.setState({
              contents: _contents,
              mode: "read",
              selected_content_id: _id
            });
          }.bind(this)}
        />
      );
    } else if (mode === "update") {
      const _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmitUpdate={function(_id, _title, _desc) {
            const _contents = Array.from(contents);
            for (let i = 0; i < _contents.length; i++) {
              if (_contents[i].id === _id) {
                _contents[i] = { id: _id, title: _title, desc: _desc };
                break;
              }
            }
            this.setState({
              contents: _contents,
              mode: "read"
            });
          }.bind(this)}
        />
      );
    }
    return _article;
  }

  render() {
    console.log("App render");

    const { mode, contents, selected_content_id } = this.state;

    const onClickTOC = id => {
      this.setState({
        mode: "read",
        selected_content_id: Number(id)
      });
    };

    const onClickControl = _mode => {
      if (_mode === "delete" && mode === "read") {
        if (window.confirm("삭제하시겠습니까?")) {
          const _contents = Array.from(contents);
          for (let i = 0; i < _contents.length; i++) {
            if (_contents[i].id === selected_content_id) {
              _contents.splice(i, 1);
              break;
            }
          }
          this.setState({
            mode: "welcome",
            contents: _contents
          });
          alert("삭제되었습니다");
        }
      } else {
        this.setState({
          mode: _mode
        });
      }
    };

    return (
      <>
        <div>현재 모드: {mode}</div>
        <Subject
          title={this.subject.title}
          sub={this.subject.sub}
          onChangeMode={onClickControl}
        />
        <TOC onClickTOC={onClickTOC} data={contents} />
        <Control onChangeMode={onClickControl} mode={mode} />
        {this.getContentComponent()}
      </>
    );
  }
}

export default App;
