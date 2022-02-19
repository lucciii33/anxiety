import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Navbar = () => {
	return (
		<div className="box1 ">

		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">FOCUS</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn">Log In</button>
					<button className="btn">register</button>
				</Link>
			</div>
		</nav>
		</div>
	);
};
