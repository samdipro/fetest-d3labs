import "./App.css";
import { Routes } from "react-router-dom";
import route from "./routes/Routes";

function App() {
  return <Routes>{route.map((val) => val)}</Routes>;
}

export default App;
