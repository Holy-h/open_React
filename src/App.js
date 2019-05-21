import React, { Component } from "react";
import "./App.css";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";

class App extends Component {
  render() {
    return (
      <>
        <Subject title="WEB" sub="world wide web!" />
        <TOC />
        <Content title="HTML" desc="HTML is Hyper Text Markup Language." />
      </>
    );
  }
}

export default App;
