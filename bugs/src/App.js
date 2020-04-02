import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./Users";

function App() {
  return (
    <div className="container">
      <header className="Users">
        <h1>Users</h1>
      </header>
      <Users />
    </div>
  );
}

export default App;
