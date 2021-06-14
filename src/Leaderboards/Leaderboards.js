import React from "react";
import axios from "axios";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import NavBar from "../NavBar";

const legendLinks = require("../Legends/Functions/LegendPictureLinks");
const IdToName = require("./Functions/LegendIDtoName");

const key = require("../APIKey");
const BRAWLHALLA_API_KEY = key.BRAWLKEY;

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		height: 140,
		width: 100,
	},
	control: {
		padding: theme.spacing(2),
	},
}));

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

const List = (props) =>
	props.list.data.map((player) => (
		<div key={player.brawlhalla_id}>
			<p>{player.name}</p>
		</div>
		// START IMPLEMENTING THE GRID FORMATTING HERE
	));

const Leaderboards = () => {
	const [spacing, setSpacing] = React.useState(2);
	const classes = useStyles();

	const [listPlayerRankings, dispatchListPlayerRankings] = React.useReducer(
		listPlayerRankingsReducer,
		{
			data: [],
			isLoading: true,
			isError: false,
		}
	);
	let bestLegend = [];
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
	React.useEffect(() => {
		getLegends();
		// eslint-disable-next-line
	}, []);

	return (
		<StyledContainer>
			<NavBar />

			{/* <Grid
				container
				className={classes.root}
				spacing={2}
				style={{ width: "100%" }}
			>
				<Grid item xs={12}>
					<Grid container justify="center" spacing={spacing}>
						{[0, 1, 2].map((value) => (
							<Grid key={value} item>
								<div
									style={{
										borderColor: "#585858",
										borderStyle: "solid",
										borderRadius: "10px",
										width: "100%",
									}}
								>
									<p>HEY</p>
									<p>HELLO</p>
								</div>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid> */}
			<List list={listPlayerRankings} />
		</StyledContainer>
	);
};

export default Leaderboards;
