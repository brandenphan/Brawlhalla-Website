import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

import NavBar from "../NavBar/NavBar";

// The background image comes from the official Brawlhalla website: https://www.brawlhalla.com/wallpapers/
// Styled components for the various components used on the home screen
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
	background-image: url(https://www.brawlhalla.com/c/uploads/2020/12/Arena2_1920x1080.jpg);
`;

const InnerContainer = styled.div`
	background: #585858;
	width: 70%;
	height: 37%;
	margin: auto;
	display: block;
	margin-top: 40px;
	border-radius: 10px;
`;

const WelcomeInformation = styled.p`
	text-align: left;
	color: white;
	padding: 3%;
	font-family: Arial;
	font-size: 25px;
`;

const HomePageInformation = styled.p`
	text-align: left;
	color: white;
	padding: 2%;
	margin-left: 1%;
	font-family: Arial;
	font-size: 25px;
`;

// Component for the home screen of the Brawlhalla React website
const Home = () => (
	<>
		<StyledContainer>
			<NavBar />
			<Grid container spacing={2} style={{ width: "100%" }}>
				<Grid item xs={12}>
					<Grid container justify="center" spacing={2}>
						<InnerContainer>
							<WelcomeInformation>Welcome to BrawlSearch!</WelcomeInformation>
							<HomePageInformation>
								This website uses the Brawlhalla API to gather information for
								the user. Please use the Navigation Bar at the top of the page
								to use the features.
							</HomePageInformation>
							<HomePageInformation style={{ fontSize: "15px" }}>
								All pictures used come from https://www.brawlhalla.com/,
								https://brawlhalla.fandom.com/wiki/Weapons#Weapon_chart, and
								https://tiermaker.com/create/michal-s-favorite-weapons-in-brawlhalla-6647.
							</HomePageInformation>
						</InnerContainer>
					</Grid>
				</Grid>
			</Grid>
		</StyledContainer>
	</>
);

export default Home;
