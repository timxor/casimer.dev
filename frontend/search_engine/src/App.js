import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Registration from "./pages/Registration";


function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
            <Home />
        }
      />
      <Route path="/register/" element={<Registration />} />
    </Routes>
  );
}

export default App;
