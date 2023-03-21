import { useState } from "react";
import banner from "./assets/under-construction.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <img src={banner} alt="in progress" />
      <h2>Check back later...</h2>
    </div>
  );
}

export default App;
