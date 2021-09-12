import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import Home from "./features/home/Home";
import NAVBAR from "./components/Nav";
import Loading from "./components/Loading";
const Home = React.lazy(() => import("./features/home/Home"));
const User = React.lazy(() => import("./features/user/User"));
function App() {
	return (
		<>
			<NAVBAR></NAVBAR>
			<Suspense fallback={<Loading />}>
				<Router>
					<Switch>
						<Route
							exact
							path="/:userId"
							component={() => <User />}
						/>
						<Route exact path="/" render={() => <Home />} />
					</Switch>
				</Router>
			</Suspense>
		</>
	);
}

export default App;
