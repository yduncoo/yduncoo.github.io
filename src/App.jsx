import { useState } from "react";
import "./App.css";
import Button from "./Button";

export default function App() {
  return (
    <div>
      <header>
        <h1>Ethan Su</h1>
        <Button url = "https://www.linkedin.com/in/ethanwaynesu/"></Button>
        <Button url="https://github.com/yduncoo"></Button>
      </header>
    </div>
  );
}