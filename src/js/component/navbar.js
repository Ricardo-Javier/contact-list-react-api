import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3">
			<span className="container">
				<span className="brandmb-0 h1">Contact List</span>
				<div className="ml-auto">
					<Link to="/add">
						<button className="btn">Add new contact</button>
					</Link>
				</div>
			</span>
		</nav>
	);
};
