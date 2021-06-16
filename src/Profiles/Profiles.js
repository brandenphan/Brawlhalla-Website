import React from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

import NavBar from "../NavBar/NavBar";
import ErrorMessageComponent from "./Components/ErrorMessage";
import SearchForm from "./Components/SearchForm";
import SearchedProfileInformation from "./Components/SearchedProfileInformation";

// Brawlhalla API key to access the data from their API
const key = require("../APIKey");
const BRAWLHALLA_API_KEY = key.BRAWLKEY;

// Styled components used for various components in this JS file
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

const InnerContainer = styled.div`
	background: #585858;
	width: 70%;
	height: 37%;
	margin: auto;
	display: block;
	margin-top: 40px;
	border-radius: 10px;
`;

const ProfileSearch = styled.h1`
	text-align: center;
	color: #ffd700;
	font-family: "Source Sans Pro";
	padding: 2%;
	font-size: 40px;
	margin-top: 1%;
`;

const SearchInformation = styled.p`
	text-align: center;
	color: white;
	padding: 1%;
	font-family: "Source Sans Pro";
	font-size: 25px;
`;

// Reducer function to manage the state and data when retrieving data from the Brawlhalla API
const searchedProfileReducer = (state, action) => {
	switch (action.type) {
		case "LOADING":
			return {
				...state,
				searching: true,
				isLoading: true,
				isError: false,
			};
		case "LOAD_SUCCESS":
			return {
				...state,
				searching: true,
				isLoading: false,
				isError: false,
				data: action.payload,
			};
		case "LOAD_FAILURE":
			return {
				...state,
				searching: true,
				isLoading: false,
				isError: true,
			};
		case "STOP_SEARCH":
			return {
				...state,
				searching: false,
				isLoading: false,
				isError: false,
				data: [],
			};
		default:
			throw new Error();
	}
};

// Component that combines various hooks and other components to render the Profiles section
const Profiles = () => {
	const [searchTerm, setSearchTerm] = React.useState(""); // State hook to manage the search field when the user searches for a profile

	// Reducer hook to store data of the searched profile and states
	const [searchedProfile, dispatchSearchedProfile] = React.useReducer(
		searchedProfileReducer,
		{ data: [], searching: false, isLoading: true, isError: false }
	);

	// Function to handle when the user inputs something into the search field
	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
		dispatchSearchedProfile({ type: "STOP_SEARCH" });
	};

	// Function that handles when the user searches for the profile
	const handleSearchSubmit = (event) => {
		SearchProfile();

		event.preventDefault();
	};

	// Function that handles when the user clicks the "CLEAR" button
	const handleClearButton = () => {
		dispatchSearchedProfile({ type: "STOP_SEARCH" });
		setSearchTerm("");
	};

	// Function that asynchronously retrieves data from the Brawlhalla API while updating the searchedProfile state
	const SearchProfile = async () => {
		dispatchSearchedProfile({ type: "LOADING" });

		try {
			const response = await axios.get(
				`https://api.brawlhalla.com/player/${searchTerm}/stats?api_key=${BRAWLHALLA_API_KEY}`
			);

			dispatchSearchedProfile({ type: "LOAD_SUCCESS", payload: response.data });
		} catch {
			dispatchSearchedProfile({ type: "LOAD_FAILURE" });
		}
	};

	// Combines everything to render the profiles section of the webpage
	return (
		<StyledContainer>
			<NavBar />

			<Grid container spacing={2} style={{ width: "100%" }}>
				<Grid item xs={12}>
					<Grid container justify="center" spacing={2}>
						<InnerContainer>
							<ProfileSearch>Profile Search</ProfileSearch>
							<SearchInformation>
								Enter a user ID to search for. The user ID can be found under
								the inventory category in the Brawlhalla client
							</SearchInformation>

							<SearchForm
								searchTerm={searchTerm}
								handleSearch={handleSearch}
								handleClearButton={handleClearButton}
								handleSearchSubmit={handleSearchSubmit}
							/>
						</InnerContainer>
					</Grid>
				</Grid>
			</Grid>

			{/* Checks if user has started searching for a profile */}
			{searchedProfile.searching ? (
				searchedProfile.isError ? ( // Checks if there was an error retrieving the profile searched by the user
					<ErrorMessageComponent />
				) : searchedProfile.isLoading ? ( // Checks if data is still being retrieved
					<CircularProgress style={{ marginLeft: "49%", marginTop: "5%" }} />
				) : (
					<SearchedProfileInformation searchedProfile={searchedProfile} />
				)
			) : (
				<></>
			)}
		</StyledContainer>
	);
};

export default Profiles;
