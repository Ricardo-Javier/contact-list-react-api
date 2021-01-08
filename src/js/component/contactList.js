import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Modal } from "../component/modal";

export const ContactList = props => {
	const { store, actions } = useContext(Context);
	const [modal, setModal] = useState(false);
	const [selectedContact, setSelectedContact] = useState(null);
	const handleDelete = contact => {
		setSelectedContact(contact);
		setModal(true);
	};
	return (
		<ul className="list-group container">
			{store.contacts.map((contact, index) => {
				return (
					<li className="list-group-item" key={index}>
						<div className="row">
							<div className="col-2">
								<img
									src="https://avatars2.githubusercontent.com/u/73149028?s=460&u=dfc212743e8fc248fb5b0188d8876a4a213351ec&v=4"
									alt="contact Avatar"
									className="rounded-circle img-fluid"
								/>
							</div>
							<div className="col-8 text-left">
								<h5>{contact.full_name}</h5>
								<ul className="list-unstyled">
									<li>
										<div className="row">
											<div className="col">
												<i className="fas fa-map-marker-alt" />
											</div>
											<div className="col-11">{contact.address}</div>
										</div>
									</li>
									<li>
										<div className="row">
											<div className="col">
												<i className="fas fa-phone" />
											</div>
											<div className="col-11">{contact.phone}</div>
										</div>
									</li>
									<li>
										<div className="row">
											<div className="col">
												<i className="fas fa-envelope" />
											</div>
											<div className="col-11">{contact.email}</div>
										</div>
									</li>
								</ul>
							</div>
							<div className="col-2">
								<ul className="list-unstyled list-inline">
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
