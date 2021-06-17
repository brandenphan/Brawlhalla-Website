import styled from "styled-components";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { CircularProgress } from "@material-ui/core";

import NavBar from "../NavBar/NavBar";
import List from "../Legends/Components/List";
import ErrorMessageComponent from "../Legends/Components/ErrorMessage";
import SearchForm from "./Components/SearchForm";
import NoLegends from "./Components/NoLegends";

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
	height: 48%;
	margin: auto;
	display: block;
	margin-top: 40px;
	border-radius: 10px;
`;

const WeaponSearch = styled.h1`
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

// Reducer function to manage the state and data when the user searches for weapons
const searchWeaponReducer = (state, action) => {
	switch (action.type) {
		case "SEARCHING_LEGENDS_EXIST":
			return {
				...state,
				searching: true,
				noLegends: false,
				data: action.payload,
			};
		case "SEARCHING_LEGENDS_NO_EXIST":
			return {
				...state,
				searching: true,
				noLegends: true,
			};
		case "STOP_SEARCHING":
			return {
				...state,
				noLegends: false,
				searching: false,
				data: [],
			};
		default:
			throw new Error();
	}
};

// Component that combines various other components and hooks to render the Weapons section
const Weapons = () => {
	// Reducer hook to store data received from the Brawlhalla API and manage state
	const [listAllLegends, dispatchListAllLegends] = React.useReducer(
		listAllLegendsReducer,
		{ data: [], isLoading: true, isError: false }
	);

	// Reducer hook to store data of the legends that use the searched weapons and states
	const [searchedWeapon, dispatchSearchedWeapon] = React.useReducer(
		searchWeaponReducer,
		{ data: [], noLegends: false, searching: false }
	);

	// State hooks to manage the weapon search fields
	const [searchTermOne, setSearchTermOne] = React.useState("");
	const [searchTermTwo, setSearchTermTwo] = React.useState("");

	// Functions that handle when the user inputs something into the two search fields
	const handleSearchOne = (event) => {
		setSearchTermOne(event.target.value);
		dispatchSearchedWeapon({ type: "STOP_SEARCHING" });
	};
	const handleSearchTwo = (event) => {
		setSearchTermTwo(event.target.value);
		dispatchSearchedWeapon({ type: "STOP_SEARCHING" });
	};

	// Function that checks if the user entered a valid weapon into the search fields
	const validWeapon = (weaponName) => {
		weaponName = weaponName.toLowerCase();

		if (
			weaponName !== "axe" &&
			weaponName !== "pistol" &&
			weaponName !== "bow" &&
			weaponName !== "cannon" &&
			weaponName !== "fists" &&
			weaponName !== "hammer" &&
			weaponName !== "orb" &&
			weaponName !== "katar" &&
			weaponName !== "rocketlance" &&
			weaponName !== "scythe" &&
			weaponName !== "spear" &&
			weaponName !== "sword" &&
			weaponName !== "greatsword"
		) {
			return false;
		} else {
			return true;
		}
	};

	// Function that handles when the user hits the search button and gathers all the information regarding legends that use the weapons searched for
	const handleSearchSubmit = (event) => {
		// If the user uses both search fields
		if (searchTermOne !== "" && searchTermTwo !== "") {
			// Ensures the user enters weapon that exist
			if (validWeapon(searchTermOne.toLowerCase()) === false) {
				window.alert(
					`${searchTermOne} is not a valid weapon. The list of weapons is listed above the search boxes`
				);
			} else {
				if (validWeapon(searchTermTwo.toLowerCase()) === false) {
					window.alert(
						`${searchTermTwo} is not a valid weapon. The list of weapons is listed above the search boxes`
					);
				}
				// Gathers all the legends that use both weapons entered
				else {
					let legendsWithWeapon = [];
					listAllLegends.data.forEach((legend) => {
						if (
							legend.weapon_one.toLowerCase() === searchTermOne.toLowerCase()
						) {
							if (
								legend.weapon_two.toLowerCase() === searchTermTwo.toLowerCase()
							) {
								legendsWithWeapon.push(legend);
							}
						} else if (
							legend.weapon_one.toLowerCase() === searchTermTwo.toLowerCase()
						) {
							if (
								legend.weapon_two.toLowerCase() === searchTermOne.toLowerCase()
							) {
								legendsWithWeapon.push(legend);
							}
						}
					});

					// Checks if there were any legends that use both weapons searched for
					if (legendsWithWeapon.length === 0) {
						dispatchSearchedWeapon({ type: "SEARCHING_LEGENDS_NO_EXIST" });
					} else {
						dispatchSearchedWeapon({
							type: "SEARCHING_LEGENDS_EXIST",
							payload: legendsWithWeapon,
						});
					}
				}
			}
		}
		// If the user uses the second weapon search field
		else if (searchTermOne !== "") {
			// Checks to make sure the weapon is valid
			if (validWeapon(searchTermOne.toLowerCase()) === false) {
				window.alert(
					`${searchTermOne} is not a valid weapon. The list of weapons is listed above the search boxes`
				);
			}
			// Gathers all legends that use the weapon entered
			else {
				let legendsWithWeapon = [];
				listAllLegends.data.forEach((legend) => {
					if (
						legend.weapon_one.toLowerCase() === searchTermOne.toLowerCase() ||
						legend.weapon_two.toLowerCase() === searchTermOne.toLowerCase()
					) {
						legendsWithWeapon.push(legend);
					}
				});

				dispatchSearchedWeapon({
					type: "SEARCHING_LEGENDS_EXIST",
					payload: legendsWithWeapon,
				});
			}
		}
		// If the user uses the first weapon search field
		else if (searchTermTwo !== "") {
			if (validWeapon(searchTermTwo.toLowerCase()) === false) {
				window.alert(
					`${searchTermTwo} is not a valid weapon. The list of weapons is listed above the search boxes`
				);
			}
			// Gatherse all legends tha tuse the weapon entered
			else {
				let legendsWithWeapon = [];
				listAllLegends.data.forEach((legend) => {
					if (
						legend.weapon_one.toLowerCase() === searchTermTwo.toLowerCase() ||
						legend.weapon_two.toLowerCase() === searchTermTwo.toLowerCase()
					) {
						legendsWithWeapon.push(legend);
					}
				});

				dispatchSearchedWeapon({
					type: "SEARCHING_LEGENDS_EXIST",
					payload: legendsWithWeapon,
				});
			}
		}

		event.preventDefault();
	};

	// Function that handles when the user hits the Clear button, clearing all search fields and resetting searched data
	const handleClearButton = () => {
		dispatchSearchedWeapon({ type: "STOP_SEARCHING" });
		setSearchTermOne("");
		setSearchTermTwo("");
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

	// Side-effect hook that runs on mount to call the above async function
	React.useEffect(() => {
		getLegends();
	}, []);

	// Combines everything to render the Weapons section
	return (
		<StyledContainer>
			<NavBar />

			{/* Checks if there was an error retrieving data from the Brawlhalla API */}
			{listAllLegends.isError ? (
				<ErrorMessageComponent />
			) : (
				<>
					<Grid container spacing={2} style={{ width: "100%" }}>
						<Grid item xs={12}>
							<Grid container justify="center" spacing={2}>
								<InnerContainer>
									<WeaponSearch>Weapon Search</WeaponSearch>
									<SearchInformation>
										Enter at least one weapon and press search to view which
										legends use that weapon
										<br />
										<br />
										List of Weapons:
										<br />
										Axe - Pistol - Bow - Cannon - Fists - Hammer - Orb - Katar -
										RocketLance - Scythe - Spear - Sword - Greatsword
									</SearchInformation>

									<SearchForm
										searchTermOne={searchTermOne}
										searchTermTwo={searchTermTwo}
										handleSearchOne={handleSearchOne}
										handleSearchTwo={handleSearchTwo}
										handleClearButton={handleClearButton}
										handleSearchSubmit={handleSearchSubmit}
									/>
								</InnerContainer>
							</Grid>
						</Grid>
					</Grid>

					{/* Checks if the user is currently searching weapons */}
					{searchedWeapon.searching ? (
						// Checks if there are no legends that use the combination of weapons entered
						searchedWeapon.noLegends ? (
							<NoLegends weaponOne={searchTermOne} weaponTwo={searchTermTwo} />
						) : (
							<List list={searchedWeapon} />
						)
					) : // Checks if the data is still loading from the Brawlhalla API
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

export default Weapons;
