import React from "react";
import axios from "axios";
import styled from "styled-components";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import InputAdornment from "@material-ui/core/InputAdornment";

import NavBar from "../NavBar";

import List from "./List";

const BRAWLHALLA_API_KEY = "YOUR BRAWLHALLA API KEY";

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

const LegendSearchFieldStyle = styled.input`
	border: 1px solid grey;
	border-radius: 5px;
	height: 40px;
	width: 50%;
	padding: 2px 23px 2px 30px;
	outline: 0;
	background-color: #f5f5f5;
	margin: auto;
	display: block;
	font-size: 25px;
`;

const BrawlSearch = styled.h1`
	text-align: center;
	color: #ffd700;
	font-family: Cursive;
	padding: 2%;
	font-size: 40px;
`;

const SearchInformation = styled.p`
	text-align: center;
	color: white;
	padding: 1%;
	font-family: Arial;
	font-size: 25px;
`;

const ErrorMessageComponent = () => (
	<div>
		<ErrorOutlineIcon
			style={{
				color: "red",
				marginLeft: "47%",
				marginTop: "5%",
				height: "7%",
				width: "7%",
			}}
		/>
		<p
			style={{
				color: "red",
				fontFamily: "Arial",
				fontSize: "25px",
				marginLeft: "30%",
			}}
		>
			Error loading data from Brawlhalla API, please try using the website again
			later
		</p>
	</div>
);

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

const LegendSearchField = ({ onInputChange }) => (
	<>
		<label htmlFor="search"></label>
		<LegendSearchFieldStyle id="search" type="text" onChange={onInputChange} />
	</>
);

const Legends = () => {
	const [listAllLegends, dispatchListAllLegends] = React.useReducer(
		listAllLegendsReducer,
		{
			data: [],
			isLoading: true,
			isError: false,
		}
	);

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

	const handleSearch = (event) => {
		console.log(event.target.value);
	};

	return (
		<StyledContainer>
			<NavBar />

			<InnerContainer>
				<BrawlSearch>Legend Search</BrawlSearch>
				<SearchInformation>
					Enter a legend name and press search to view specific legends
				</SearchInformation>

				<form>
					<TextField
						style={{
							width: "95%",
							marginLeft: "2.5%",
							marginTop: "2%",
						}}
						InputProps={{
							disableUnderline: true,
							style: {
								fontSize: "25px",
								borderBottom: "1px solid white",
								color: "white",
							},
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon style={{ color: "white" }} />
								</InputAdornment>
							),
						}}
						onChange={handleSearch}
					></TextField>
					<Button
						variant="outlined"
						style={{
							padding: "1%",
							width: "20%",
							marginTop: "2%",
							marginLeft: "25%",
							borderColor: "white",
							color: "white",
						}}
					>
						Clear
					</Button>
					<Button
						variant="contained"
						style={{
							padding: "1%",
							width: "20%",
							marginTop: "2%",
							marginLeft: "10%",
							backgroundColor: "#5DCED4",
							color: "black",
						}}
					>
						Search
					</Button>
				</form>
			</InnerContainer>

			{listAllLegends.isError && <ErrorMessageComponent />}

			{listAllLegends.isLoading ? (
				<CircularProgress style={{ marginLeft: "49%", marginTop: "5%" }} />
			) : (
				<List list={listAllLegends} />
			)}
		</StyledContainer>
	);
};

export default Legends;
