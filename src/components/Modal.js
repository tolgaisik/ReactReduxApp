import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Modal = ({ children, show, onClose }) => {
	const display = show ? "custom-modal" : "d-none";
	return (
		<div className={display}>
			<div className="modal-center mx-auto mt-5  animate__animated animate__backInDown">
				{children}
			</div>
		</div>
	);
};
export default Modal;
