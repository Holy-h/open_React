import React, { useState } from "react";
import "./App.css";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";

const App = () => {
  const [mode, setMode] = useState("welcome");
  const [subject, setSubject] = useState({
    title: "WEB",
    sub: "World Wide Web!"
  });
  const [welcome, setWelcome] = useState({
    title: "welcome",
    desc: "Hello, React!!"
  });
  const [contents, setContents] = useState([
    { id: 1, title: "HTML", desc: "HTML is for Information" },
    { id: 2, title: "CSS", desc: "CSS is for Design" },
    { id: 3, title: "JS", desc: "JS is for interactive" }
  ]);

  let _title,
    _desc = null;
  if (mode === "welcome") {
    _title = welcome.title;
    _desc = welcome.desc;
  } else if (mode === "read") {
    _title = contents[0].title;
    _desc = contents[0].desc;
  }
  return (
    <>
      <Subject title={subject.title} sub={subject.sub} />
      <TOC data={contents} />
      <Content title={_title} desc={_desc} />
    </>
  );
};

export default App;
