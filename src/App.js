import React from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <h1>Articles</h1>
      <List />
      <div>
        <h2>Add a new article</h2>
        <Form />
      </div>
    </div>
  );
}

export default App;
