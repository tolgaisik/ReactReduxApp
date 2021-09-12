import Spinner from "react-bootstrap/Spinner";
const Loading = () => {
	return (
		<div className="loading d-flex justify-content-center align-items-center">
			<Spinner animation="border" variant="success" />
		</div>
	);
};
export default Loading;
