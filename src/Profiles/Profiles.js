import React from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

import NavBar from "../NavBar/NavBar";
import SearchForm from "./Components/SearchForm";

const key = require("../APIKey");
const BRAWLHALLA_API_KEY = key.BRAWLKEY;

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

const searchedProfileReducer = (state, action) => {
	switch (action.type) {
		case "LOADING":
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case "LOAD_SUCCESS":
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload,
			};
		case "LOAD_FAILURE":
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		case "STOP_SEARCH":
			return {
				...state,
				isLoading: false,
				isError: false,
				data: [],
			};
		default:
			throw new Error();
	}
};

const Profiles = () => {
	const [searchTerm, setSearchTerm] = React.useState("");

	const [searchedProfile, dispatchSearchedProfile] = React.useReducer(
		searchedProfileReducer,
		{ data: [], isLoading: true, isError: false }
	);

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
		dispatchSearchedProfile({ type: "STOP_SEARCH" });
	};

	const SearchProfile = async () => {
		dispatchSearchedProfile({ type: "LOADING" });

		try {
			console.log(searchTerm);
			const response = await axios.get(
				`https://api.brawlhalla.com/player/${searchTerm}/stats?api_key=${BRAWLHALLA_API_KEY}`
			);

			console.log(response.data);

			dispatchSearchedProfile({ type: "LOAD_SUCCESS", payload: response.data });
		} catch {
			dispatchSearchedProfile({ type: "LOAD_FAILURE" });
		}
	};

	const handleSearchSubmit = (event) => {
		SearchProfile();

		event.preventDefault();
	};

	const handleClearButton = () => {
		dispatchSearchedProfile({ type: "STOP_SEARCH" });
		setSearchTerm("");
	};

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
		</StyledContainer>
	);
};

export default Profiles;
