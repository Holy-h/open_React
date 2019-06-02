import React, { useState } from "react";
import "./App.css";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Control from "./components/Control";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

const App = () => {
  const [mode, setMode] = useState("welcome");
  const [selected_content_id, setSelected_content_id] = useState(1);
  const [welcome, setWelcome] = useState({
    id: 0,
    title: "welcome",
    desc: "Hello, React!!"
  });
  const [contents, setContents] = useState([
    { id: 1, title: "HTML", desc: "HTML is for Information" },
    { id: 2, title: "CSS", desc: "CSS is for Design" },
    { id: 3, title: "JS", desc: "JS is for interactive" }
  ]);

  const subject = {
    title: "WEB(Hooks)",
    sub: "World Wide Web!"
  };

  const getReadContent = () => {
    for (let i = 0; i < contents.length; i++) {
      if (contents[i].id === selected_content_id) {
        return contents[i];
      }
    }
  };

  const getContentComponent = () => {
    let _title,
      _desc,
      _article = null;
    if (mode === "welcome") {
      _title = welcome.title;
      _desc = welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />;
    } else if (mode === "welcomeupdate") {
      _article = (
        <UpdateContent
          data={welcome}
          onSubmitUpdate={(_id, _title, _desc) => {
            setWelcome({ id: _id, title: _title, desc: _desc });
            setMode("welcome");
          }}
        />
      );
    } else if (mode === "read") {
      const _content = getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc} />;
    } else if (mode === "create") {
      _article = (
        <CreateContent
          onSubmitCreate={(_title, _desc) => {
            const _id = contents.length + 1;
            const _contents = contents.concat({
              id: _id,
              title: _title,
              desc: _desc
            });
            setContents(_contents);
            setMode("read");
            setSelected_content_id(_id);
          }}
        />
      );
    } else if (mode === "update") {
      const _content = getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmitUpdate={(_id, _title, _desc) => {
            const _contents = Array.from(contents);
            for (let i = 0; i < _contents.length; i++) {
              if (_contents[i].id === _id) {
                _contents[i] = { id: _id, title: _title, desc: _desc };
                break;
              }
            }
            setContents(_contents);
            setMode("read");
          }}
        />
      );
    }
    return _article;
  };

  const onClickTOC = id => {
    setMode("read");
    setSelected_content_id(Number(id));
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
        setMode("welcome");
        setContents(_contents);
        alert("삭제되었습니다!");
      }
    } else {
      setMode(_mode);
    }
  };

  return (
    <>
      <div>현재 모드: {mode}</div>
      <Subject
        title={subject.title}
        sub={subject.sub}
        onChangeMode={onClickControl}
      />
      <TOC onClickTOC={onClickTOC} data={contents} />
      <Control onChangeMode={onClickControl} mode={mode} />
      {getContentComponent()}
    </>
  );
};

export default App;
