import React from "react";
import axios from "axios";
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

import NavBar from "../NavBar";
import List from "./Components/List";
import ErrorMessageComponent from "../Legends/Components/ErrorMessage";

const IdToName = require("./Functions/LegendIDtoName");

// Brawlhalla API key to access the data from their API
const key = require("../APIKey");
const BRAWLHALLA_API_KEY = key.BRAWLKEY;

// Styledc omponent used for the main div of the leaderboards page
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

// Reducer function to manage the state and data when retrieving data from the Brawlhalla API
const listPlayerRankingsReducer = (state, action) => {
	switch (action.type) {
		case "LIST_LOADING":
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case "LIST_LOADING_SUCCESS":
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload,
			};
		case "LIST_LOADING_FAILURE":
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		default:
			throw new Error();
	}
};

// Component that combines various components, functions, and hooks to render the Leaderboards section
const Leaderboards = () => {
	// Reducer hook to store data received from the Brawlhalla API and manage states while receiving the data
	const [listPlayerRankings, dispatchListPlayerRankings] = React.useReducer(
		listPlayerRankingsReducer,
		{
			data: [],
			isLoading: true,
			isError: false,
		}
	);
	let bestLegend = [];

	// Async function that retrieves data from the Brawlhalla API while updating the listPlayerRankings state
	const getLegends = async () => {
		dispatchListPlayerRankings({ type: "LIST_LOADING" });
		try {
			const response = await axios.get(
				`https://api.brawlhalla.com/rankings/1v1/all/1?api_key=${BRAWLHALLA_API_KEY}`
			);

			dispatchListPlayerRankings({
				type: "LIST_LOADING_SUCCESS",
				payload: response.data,
			});

			response.data.forEach((legend, index) => {
				bestLegend[index] = IdToName.LegendIDtoName(legend.best_legend);
			});
		} catch {
			dispatchListPlayerRankings({ type: "LIST_LOADING_FAILURE" });
		}
	};

	// Side-effect hook that only runs on the mounting render to retrieve the data from the Brawlhalla API
	React.useEffect(() => {
		getLegends();
		// eslint-disable-next-line
	}, []);

	// Combines everything to render the Leaderboards section of the webpage
	return (
		<StyledContainer>
			<NavBar />

			{listPlayerRankings.isError ? (
				<ErrorMessageComponent />
			) : listPlayerRankings.isLoading ? (
				<CircularProgress style={{ marginLeft: "48.5%", marginTop: "5%" }} />
			) : (
				<List list={listPlayerRankings} />
			)}
		</StyledContainer>
	);
};

export default Leaderboards;
