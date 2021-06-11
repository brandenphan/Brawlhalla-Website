import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Legends from "./Legends/Legends";
import Home from "./Home/Home";

const StyledContainer = styled.div`
	background: #83a4d4;
	background: linear-gradient(to left, #b6fbff, #83a4d4);
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0px;
	left: 0px;
	z-index: 1000;
	overflow-y: auto;
`;

const App = () => {
	return (
		<Router>
			<StyledContainer>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/Legends" component={Legends} />
				</Switch>
			</StyledContainer>
		</Router>
	);
};

export default App;
