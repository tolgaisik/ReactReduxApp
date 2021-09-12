import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
const Card = ({
	imageURL,
	name = "Mustafa Kemal",
	status = "Active",
	email = "mustafa@kemal.com",
	seeProfile,
}) => {
	return (
		<div className="custom-card p-3 border shadow-sm">
			<Row>
				<Col md={4} lg={4} sm={4} xl={4} xs={4}>
					<Image
						width={100}
						height={100}
						src={imageURL}
						roundedCircle
					></Image>
				</Col>
				<Col md={8} lg={8} sm={8} xl={8} xs={8}>
					<Row>
						<Col
							md={12}
							lg={12}
							sm={12}
							xl={12}
							xs={12}
							className=""
						>
							<h3>{name}</h3>
						</Col>
						<Col md={12} lg={12} sm={12} xl={12} xs={12}>
							<small>{status} since 1992</small>
						</Col>
						<Col
							md={12}
							lg={12}
							sm={12}
							xl={12}
							xs={12}
							className="mb-4"
						>
							<span>{email}</span>
						</Col>
						<Col>
							<Button onClick={seeProfile}>See Profile</Button>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};
export default Card;
