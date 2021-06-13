import React from "react";
import axios from "axios";
import styled from "styled-components";

import NavBar from "../NavBar";

const BRAWLHALLA_API_KEY = "";

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

const Leaderboards = () => {
	return (
		<StyledContainer>
			<NavBar />
		</StyledContainer>
	);
};

export default Leaderboards;
