import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

export const Modal = props => {
	const handleDelete = () => {
		props.delete(props.contact.id);
		props.onClose(false);
	};

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose(false)}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<p>Ummm, I made a bo-bo. Let&apos;s start over, ok?</p>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary" onClick={() => props.onClose(false)}>
							Wait, no!!!
						</button>
						<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleDelete}>
							Do ettttttt!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	delete: PropTypes.func,
	contact: PropTypes.object
};

Modal.defaultProps = {
	show: false,
	onClose: null
};
