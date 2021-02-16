import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { ContactList } from "../component/contactList";
import { Navbar } from "../component/navbar";
import { Link, useParams } from "react-router-dom";

export const Home = () => (
	<div className="container contactlist text-center mt-5">
		<Navbar />
		<ContactList />
	</div>
);
