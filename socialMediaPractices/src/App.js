import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SingUp from "./components/SignIp/SingUp";
import LogIn from "./components/LogIn/LogIn";
import PostSent from "./components/postSent/PostSent";
import IpAdress from "./components/ipAdress/IpAdress";
import TestApi from "./components/testApi/testApi";
import Likedislike from "./components/likeDislike/Likedislike";
import Acordion from "./components/acordion/Acordion"

function App() {
  return (
    <Router>
      <div>
        
        <nav className="App">
          <ul>
            <li >
              <Link to="/">SingUp</Link>
            </li>
            <li>
              <Link to="/logIn">LogIn</Link>
            </li>
            <li>
              <Link to="/PostSent">PostSent</Link>
            </li>
            <li>
              <Link to="/IpAdress">IpAdress</Link>
            </li>
            <li>
              <Link to="/TestApi">TestApi</Link>
            </li>
            <li>
              <Link to="/Likedislike">Likedislike</Link>
            </li>
            <li>
              <Link to="/Acordion">Acordion</Link>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<SingUp />}></Route>
          <Route path="/logIn" element={<LogIn />}></Route>
          <Route path="/PostSent" element={<PostSent />}></Route>
          <Route path="/IpAdress" element={<IpAdress />}></Route>
          <Route path="/TestApi" element={<TestApi />}></Route>
          <Route path="/Likedislike" element={<Likedislike />}></Route>
          <Route path="/Acordion" element={<Acordion />}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
