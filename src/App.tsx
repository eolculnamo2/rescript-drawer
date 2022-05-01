import React from "react";
import logo from "./logo.svg";
import { make as Drawer } from "./Drawer/Drawer.gen";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Drawer
          backgroundColor="green"
          // fontColor="yellow"
          // head={<h3>Hello whirled</h3>}
        >
          <ul>
            <li>option asdf</li>
            <li>option asdf</li>
            <li>option asdf</li>
            <li>option asdf</li>
          </ul>
        </Drawer>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
