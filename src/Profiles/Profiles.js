import styled from "styled-components";

import NavBar from "../NavBar/NavBar";

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

const Profiles = () => {
	return (
		<StyledContainer>
			<NavBar />
			<p>PROFILES</p>
		</StyledContainer>
	);
};

export default Profiles;
