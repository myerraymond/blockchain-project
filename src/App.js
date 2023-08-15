import logo from './logo.svg';
import { useRef } from "react";
import './App.css';
import { FaBars, FaTimes } from "react-icons/fa";

import LandingPage from './components/LandingPage';




function App() {
  const navRef = useRef();

  const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

  return (

    <header>
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
      <h3>Blockchain Transaction</h3>
    </div>
    <nav ref={navRef}>
      <a href="index.html">HOME</a>
      <a href="about.html">ABOUT US</a>

      <button
        className="nav-btn"
        onClick={showNavbar}>
        <FaTimes />
      </button>
    </nav>
    <button
      className="nav-btn"
      onClick={showNavbar}>
      <FaBars />
    </button>
  </header>

  );
}

export default App;





