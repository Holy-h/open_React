import React, { useState } from "react";
import "./App.css";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";

const App = () => {
  const [content, setContent] = useState({
    title: "sample title",
    desc: "sample desc"
  });

  let subject = {
    title: "WEB",
    sub: "World Wide Web!"
  };

  let welcome = {
    title: "환영합니당",
    desc: "Hello, React!!"
  };

  let contents_db = [
    { id: 1, title: "HTML", desc: "HTML is for Information" },
    { id: 2, title: "CSS", desc: "CSS is for Design" },
    { id: 3, title: "JS", desc: "JS is for interactive" }
  ];

  const onClickTOC = async id => {
    const int_id = await Number(id);
    for (let i = 0; i < contents_db.length; i++) {
      let data = contents_db[i];
      if (data.id === int_id) {
        setContent(data);
        break;
      }
    }
  };

  return (
    <>
      <Subject
        title={subject.title}
        sub={subject.sub}
        onClickSubject={function() {
          setContent(welcome);
        }}
      />
      <TOC data={contents_db} onClickTOC={onClickTOC} />
      <Content title={content.title} desc={content.desc} />
    </>
  );
};

export default App;
