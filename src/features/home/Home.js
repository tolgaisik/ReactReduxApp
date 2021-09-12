import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
	setPage,
	getUsersAsync,
	selectUsers,
	selectUsersStatus,
	selectUsersPages,
	selectPage,
} from "./HomeSlice";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Pagination from "react-bootstrap/Pagination";
import styles from "./Home.module.css";
import Loading from "../../components/Loading";
const Home = () => {
	const dispatch = useDispatch();
	const page = useSelector(selectPage);
	const users = useSelector(selectUsers);
	const status = useSelector(selectUsersStatus);
	const pages = useSelector(selectUsersPages);
	useEffect(() => dispatch(getUsersAsync(page)), [page, dispatch]);
	function makePagination(active, pages) {
		let pagination = [];
		for (let i = 1; i <= pages; i++) {
			pagination.push(
				<Pagination.Item
					onClick={() => dispatch(setPage(i))}
					key={i}
					active={i === active}
				>
					{i}
				</Pagination.Item>
			);
		}
		return pagination;
	}
	if (status === "rejected")
		return (
			<Container>
				<h1>Oopss Something went wrong!</h1>
			</Container>
		);
	if (status === "loading") return <Loading />;
	return (
		<Container className={styles.container}>
			<Row>
				{users.length > 0 &&
					users.map((user, index) => (
						<Col
							key={index}
							sm={12}
							lg={4}
							md={6}
							className="align-items-center"
						>
							<UserCard {...user} />
						</Col>
					))}
				<Col xs={12} md={12} lg={12} xl={12}>
					<Pagination className="justify-content-center py-4">
						{makePagination(page, pages)}
					</Pagination>
				</Col>
			</Row>
		</Container>
	);
};

const UserCard = ({ id, email, first_name, last_name, avatar }) => {
	const history = useHistory();
	function handleRouting(id) {
		history.push("/".concat(String(id)));
	}
	return (
		<Card style={{ marginTop: "10px" }} className={styles.card}>
			<Card.Img
				width="128"
				height="123"
				variant="top"
				src={avatar}
				loading="lazy"
				alt="CardImage"
			/>
			<Card.Body>
				<Card.Title>
					{first_name.concat(" ").concat(last_name)}
				</Card.Title>
				<Card.Text>{email}</Card.Text>
				<Button variant="primary" onClick={() => handleRouting(id)}>
					See Profile
				</Button>
			</Card.Body>
		</Card>
	);
};
export default Home;
