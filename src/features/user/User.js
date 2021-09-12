import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { getUserAsync, selectUser } from "./UserSlice";
import styles from "./User.module.css";
import Modal from "../../components/Modal";
import Loading from "../../components/Loading";
const User = () => {
	const [show, setShow] = useState(false);
	const { userId } = useParams();
	const dispatch = useDispatch();
	useEffect(() => dispatch(getUserAsync(userId)), [userId, dispatch]);
	const { user, support, status } = useSelector(selectUser);
	const history = useHistory();
	if (status === "loading") {
		return <Loading />;
	}
	if (status === "rejected") return <Alert>Something went wrong!</Alert>;
	return (
		<Container className={styles.container}>
			<Row>
				<Col></Col>
				<Col className={styles.col + " mb-3"}>
					<Image
						src={user.avatar}
						width="130"
						height="130"
						roundedCircle
					></Image>{" "}
				</Col>
				<Col>
					<Button
						variant="outline-info"
						onClick={() => history.goBack()}
					>
						Back
					</Button>
				</Col>
				<Table striped bordered hover className="mt-5">
					<thead>
						<tr>
							<th>Contact</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Name </td>
							<td>{user.first_name + " " + user.last_name}</td>
						</tr>
						<tr>
							<td>Email</td>
							<td>{user.email}</td>
						</tr>
						<tr>
							<td>Avatar</td>
							<td>{user.avatar}</td>
						</tr>
						<tr>
							<td>Id</td>
							<td>{user.id}</td>
						</tr>
						<tr>
							<td>Support Url</td>
							<td>{support.url}</td>
						</tr>
						<tr>
							<td>Support Text</td>
							<td>{support.text}</td>
						</tr>
					</tbody>
				</Table>
				<Button onClick={() => setShow(true)}>Modal</Button>
			</Row>
			<Modal show={show} onClose={() => setShow(false)}>
				<Alert
					variant="danger"
					onClose={() => setShow(false)}
					dismissible
				>
					<Alert.Heading>Oh snap! You got an error!</Alert.Heading>
					<p>
						Change this and that and try again. Duis mollis, est non
						commodo luctus, nisi erat porttitor ligula, eget lacinia
						odio sem nec elit. Cras mattis consectetur purus sit
						amet fermentum.
					</p>
				</Alert>
			</Modal>
		</Container>
	);
};
export default User;
