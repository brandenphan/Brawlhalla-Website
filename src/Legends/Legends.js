import React from "react";
import axios from "axios";
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

import NavBar from "../NavBar";
import List from "./Components/List";
import SearchedLegendComponent from "./Components/SearchedLegendComponent";
import ErrorMessageComponent from "./Components/ErrorMessage";
import LegendNonExistentComponent from "./Components/LegendNonExistent";
import SearchForm from "./Components/SearchForm";

const BRAWLHALLA_API_KEY = ""; // Brawlhalla API key to access the data from their API

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
	height: 40%;
	margin: auto;
	display: block;
	margin-top: 40px;
	border-radius: 10px;
`;

const BrawlSearch = styled.h1`
	text-align: center;
	color: #ffd700;
	font-family: "Source Sans Pro";
	padding: 2%;
	font-size: 40px;
`;

const SearchInformation = styled.p`
	text-align: center;
	color: white;
	padding: 1%;
	font-family: "Source Sans Pro";
	font-size: 25px;
`;

// Reducer function to manage the state and data when retrieving data from the Brawlhalla API
const listAllLegendsReducer = (state, action) => {
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

// Reducer function to manage the state and data when the user searches for a specific legend
const searchedLegendReducer = (state, action) => {
	switch (action.type) {
		case "SEARCHING":
			return {
				...state,
				searching: true,
			};
		case "LEGEND_EXIST":
			return {
				...state,
				exist: true,
				data: action.payload,
			};
		case "LEGEND_NO_EXIST":
			return {
				...state,
				exist: false,
			};
		case "STOP_SEARCHING":
			return {
				...state,
				exist: false,
				searching: false,
				data: [],
			};
		default:
			throw new Error();
	}
};

// Component that combines various other components and hooks to render the Legends section
const Legends = () => {
	// Reducer hook to store data received from the Brawlhalla API and states while receiving the data
	const [listAllLegends, dispatchListAllLegends] = React.useReducer(
		listAllLegendsReducer,
		{
			data: [],
			isLoading: true,
			isError: false,
		}
	);

	// Reducer hook to store data of the searched legend and states
	const [searchedLegend, dispatchSearchedLegend] = React.useReducer(
		searchedLegendReducer,
		{ data: [], exist: false, searching: false }
	);

	const [searchTerm, setSearchTerm] = React.useState(""); // State hook to manage the search field when the user searches for a legend

	// Function that handles when the user inputs something into the search field
	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
		dispatchSearchedLegend({ type: "STOP_SEARCHING" });
	};

	// Function that handles when the user submits the legend search field
	const handleSearchSubmit = (event) => {
		dispatchSearchedLegend({ type: "SEARCHING" });

		listAllLegends.data.forEach((legend) => {
			if (legend.legend_name_key === searchTerm.toLowerCase()) {
				dispatchSearchedLegend({ type: "LEGEND_EXIST", payload: legend });
			}
		});

		event.preventDefault();
	};

	// Function that handles when the user clicks the "CLEAR" button
	const handleClearButton = () => {
		dispatchSearchedLegend({ type: "STOP_SEARCHING" });
		setSearchTerm("");
	};

	// Async function that retrieves data from the Brawlhalla API while updating the listAllLegends state
	const getLegends = async () => {
		dispatchListAllLegends({ type: "LIST_LOADING" });
		try {
			const response = await axios.get(
				`https://api.brawlhalla.com/legend/all/?api_key=${BRAWLHALLA_API_KEY}`
			);

			dispatchListAllLegends({
				type: "LIST_LOADING_SUCCESS",
				payload: response.data,
			});
		} catch {
			dispatchListAllLegends({ type: "LIST_LOADING_FAILURE" });
		}
	};

	// Side-effect hook that runs once to call the above function and load data from the Brawlhalla API
	React.useEffect(() => {
		getLegends();
	}, []);

	// Combines everything to render the legend section of the webpage
	return (
		<StyledContainer>
			<NavBar />

			{/* Checks if there was an error loading data from the Brawlhalla API */}
			{listAllLegends.isError ? (
				<ErrorMessageComponent />
			) : (
				<>
					<InnerContainer>
						<BrawlSearch>Legend Search</BrawlSearch>
						<SearchInformation>
							Enter a legend name and press search to view specific legends
						</SearchInformation>
						<SearchForm
							searchTerm={searchTerm}
							handleSearch={handleSearch}
							handleClearButton={handleClearButton}
							handleSearchSubmit={handleSearchSubmit}
						/>
					</InnerContainer>

					{/* Checks if the user is searching for a legend with the search field and if the legend the user searched for exist */}
					{searchedLegend.searching ? (
						searchedLegend.exist ? (
							<SearchedLegendComponent list={searchedLegend} />
						) : (
							<LegendNonExistentComponent legendName={searchTerm} />
						)
					) : // Checks if the data is still being retrieved from the Brawlhalla API
					listAllLegends.isLoading ? (
						<CircularProgress style={{ marginLeft: "49%", marginTop: "5%" }} />
					) : (
						<List list={listAllLegends} />
					)}
				</>
			)}
		</StyledContainer>
	);
};

export default Legends;
