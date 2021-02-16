import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.scss";

export const AddEditContact = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const theid = params.theid;
	const [name, setName] = useState(typeof theid !== "undefined" ? store.contacts[theid].full_name : null);
	const [email, setEmail] = useState(typeof theid !== "undefined" ? store.contacts[theid].email : null);
	const [phone, setPhone] = useState(typeof theid !== "undefined" ? store.contacts[theid].phone : null);
	const [address, setAddress] = useState(typeof theid !== "undefined" ? store.contacts[theid].address : null);

	return (
		<div className="container contactlist">
			<hr className="my-4" />

			{/* add form here */}
			<form onSubmit={e => e.preventDefault()}>
				<h1> {theid ? "Edit" : "Add"} Contact</h1>
				<div className="form-group">
					<label htmlFor="exampleFormControlInput1">Full Name</label>
					<input
						type="name"
						className="form-control"
						value={name}
						onChange={e => setName(e.target.value)}
						id="exampleFormControlInput1"
						placeholder="name here"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleFormControlInput1">Email address</label>
					<input
						type="email"
						className="form-control"
						value={email}
						onChange={e => setEmail(e.target.value)}
						id="exampleFormControlInput1"
						placeholder="name@example.com"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleFormControlInput1">Phone Number</label>
					<input
						type="Phone"
						className="form-control"
						value={phone}
						onChange={e => setPhone(e.target.value)}
						id="exampleFormControlInput1"
						placeholder="(123)-456-7890"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleFormControlInput1">Home Address</label>
					<input
						type="address"
						className="form-control"
						value={address}
						onChange={e => setAddress(e.target.value)}
						id="exampleFormControlInput1"
						placeholder="1234 light saber drive, Fl. 34949"
					/>
				</div>
				<button
					onClick={e =>
						actions.addContact({
							agenda_slug: "ricardo_agenda",
							full_name: name,
							email: email,
							phone: phone,
							address: address
						})
					}
					type="submit"
					className="addcontact btn btn-primary btn-lg">
					{theid ? "Edit" : "Add"} Contact
				</button>
				<Link to="/">
					<button className="btn back">Back Home</button>
				</Link>
			</form>
		</div>
	);
};
