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

const searchedLegendReducer = (state, action) => {
	switch (action.type) {
		case "SEARCHING":
			return {
				...state,
				searching: true,
			};
		case "LEGEND_EXIST":
			console.log("WOW");
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

const Legends = () => {
	const [listAllLegends, dispatchListAllLegends] = React.useReducer(
		listAllLegendsReducer,
		{
			data: [],
			isLoading: true,
			isError: false,
		}
	);

	const [searchedLegend, dispatchSearchedLegend] = React.useReducer(
		searchedLegendReducer,
		{ data: [], exist: false, searching: false }
	);

	const [searchTerm, setSearchTerm] = React.useState("");

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
		dispatchSearchedLegend({ type: "STOP_SEARCHING" });
	};

	const handleSearchSubmit = (event) => {
		dispatchSearchedLegend({ type: "SEARCHING" });

		listAllLegends.data.forEach((legend) => {
			if (legend.legend_name_key === searchTerm.toLowerCase()) {
				dispatchSearchedLegend({ type: "LEGEND_EXIST", payload: legend });

				console.log("HEY" + searchedLegend.exist);
			}
		});

		event.preventDefault();
	};

	const handleClearButton = () => {
		dispatchSearchedLegend({ type: "STOP_SEARCHING" });
		setSearchTerm("");
	};

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

	React.useEffect(() => {
		getLegends();
	}, []);

	return (
		<StyledContainer>
			<NavBar />

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

			{/* Make it so the legend search container also doesn't show upon the error with the API */}

			{listAllLegends.isError && <ErrorMessageComponent />}

			{searchedLegend.searching ? (
				searchedLegend.exist ? (
					<SearchedLegendComponent list={searchedLegend} />
				) : (
					<LegendNonExistentComponent legendName={searchTerm} />
				)
			) : listAllLegends.isLoading ? (
				<CircularProgress style={{ marginLeft: "49%", marginTop: "5%" }} />
			) : (
				<List list={listAllLegends} />
			)}
		</StyledContainer>
	);
};

export default Legends;
