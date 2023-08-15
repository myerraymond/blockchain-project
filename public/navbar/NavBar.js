import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/main.css";
import logo from "../styles/blockchain1.png"; 

function Navbar() {
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
				<a href="/#">HOME</a>
				<a href="/#">ABOUT US</a>
				<a href="/#">JSKSNDS</a>

				<button
					className="nav-btn nav-close-btn"
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

export default Navbar;




