import React from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import Post from "./components/post";

function App() {
  return (
    <div>
      <h1>Articles</h1>
      <List />
      <div>
        <h2>Add a new article</h2>
        <Form />
      </div>

      <div>
        <h2>API posts</h2>
        <Post />
      </div>
    </div>
  );
}

export default App;
