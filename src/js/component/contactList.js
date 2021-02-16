import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Modal } from "../component/modal";
import { Navbar } from "./navbar";

import "../../styles/index.scss";

export const ContactList = props => {
	const { store, actions } = useContext(Context);
	const [modal, setModal] = useState(false);
	const [selectedContact, setSelectedContact] = useState(null);
	const handleDelete = contact => {
		setSelectedContact(contact);
		setModal(true);
	};
	return (
		<ul className="container">
			{store.contacts.map((contact, index) => {
				return (
					<li className="list-group-item" key={index}>
						<div className="row">
							<div className="col-2">
								<img
									src="https://i.pravatar.cc/300"
									alt="contact Avatar"
									className="rounded-circle img"
								/>
							</div>
							<div className="col-6 text-left">
								<ul className="list-unstyled">
									<li>
										<h4 className="name">{contact.full_name}</h4>
										<div className="row">
											<div className="col-2">
												<i className="fas fa-map-marker-alt" />
											</div>
											<div className="col-10">{contact.address}</div>
										</div>
									</li>
									<li>
										<div className="row">
											<div className="col-2">
												<i className="fas fa-phone" />
											</div>
											<div className="col-10">{contact.phone}</div>
										</div>
									</li>
									<li>
										<div className="row">
											<div className="col-2">
												<i className="fas fa-envelope" />
											</div>
											<div className="col-10">{contact.email}</div>
										</div>
									</li>
								</ul>
							</div>
							<div className="col-2">
								<ul className="list-unstyled list-inline icons">
									<li className="list-inline-item">
										<Link to={`/edit/${index}`}>
											<i className="fas fa-pencil-alt" />
										</Link>
									</li>
									<li className="list-inline-item">
										<Link to={`#`}>
											<i className="fas fa-trash-alt" onClick={e => handleDelete(contact)} />
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</li>
				);
			})}
			<Modal show={modal} onClose={setModal} contact={selectedContact} delete={actions.deleteContact} />
		</ul>
	);
};
