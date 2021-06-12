import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";
import "@fontsource/source-sans-pro";

const legendWeaponLinks = require("./LegendPictureLinks");

const LegendContainer = styled.div`
	width: 70%;
	height: 30%;
	margin: auto;
	display: block;
	margin-top: 40px;
	border-radius: 10px;
	border-style: solid;
	border-color: #585858;
`;

const LegendAttributeCaption = styled.p`
	font-size: 15px;
`;

const capitalizeName = (legend) => {
	let capitalized = legend.replace(" ", "-");
	capitalized = capitalized.charAt(0).toUpperCase() + capitalized.slice(1);
	capitalized = capitalized
		.split("-")
		.map((e) => e.charAt(0).toUpperCase() + e.slice(1))
		.join("-");
	return capitalized;
};

const SearchedLegendComponent = (props) => (
	<LegendContainer key={props.list.data.legend_id}>
		<h2
			style={{
				marginLeft: "3%",
				marginTop: "10%",
				fontFamily: "Source Sans Pro",
				color: "black",
			}}
		>
			{capitalizeName(props.list.data.legend_name_key)}
		</h2>
		<div style={{ marginTop: "8.7%", height: "100%" }}>
			<img
				src={legendWeaponLinks.BrawlhallaLegendPicture(
					capitalizeName(props.list.data.legend_name_key)
				)}
				alt=""
				height="100%"
				width="15%"
				style={{ marginLeft: "15%", marginTop: "-30%" }}
			/>
		</div>
		<div style={{ marginTop: "-37%" }}>
			<img
				src={legendWeaponLinks.BrawlhallaWeaponPicture(
					props.list.data.weapon_one.toLowerCase()
				)}
				alt=""
				height="50%"
				width="10%"
				style={{ marginLeft: "38%" }}
			/>
			<img
				src={legendWeaponLinks.BrawlhallaWeaponPicture(
					props.list.data.weapon_two.toLowerCase()
				)}
				alt=""
				height="50%"
				width="10%"
				style={{ marginLeft: "8%" }}
			/>
		</div>
		<div
			style={{
				width: 100,
				height: 100,
				marginLeft: "74%",
				marginTop: "-17%",
			}}
		>
			<LegendAttributeCaption
				style={{ marginLeft: "20%", fontFamily: "Source Sans Pro" }}
			>
				Strength
			</LegendAttributeCaption>
			<CircularProgressbar
				value={props.list.data.strength * 10}
				text={props.list.data.strength}
			/>
		</div>
		<div
			style={{
				width: 100,
				height: 100,
				marginLeft: "74%",
				marginTop: "3%",
			}}
		>
			<LegendAttributeCaption
				style={{ marginLeft: "20%", fontFamily: "Source Sans Pro" }}
			>
				Dexterity
			</LegendAttributeCaption>
			<CircularProgressbar
				value={props.list.data.dexterity * 10}
				text={props.list.data.dexterity}
			/>
		</div>
		<div
			style={{
				width: 100,
				height: 100,
				marginLeft: "90%",
				marginTop: "-19.3%",
			}}
		>
			<LegendAttributeCaption
				style={{ marginLeft: "20%", fontFamily: "Source Sans Pro" }}
			>
				Defense
			</LegendAttributeCaption>
			<CircularProgressbar
				value={props.list.data.defense * 10}
				text={props.list.data.defense}
			/>
		</div>
		<div
			style={{
				width: 100,
				height: 100,
				marginLeft: "90%",
				marginTop: "3%",
			}}
		>
			<LegendAttributeCaption
				style={{ marginLeft: "25%", fontFamily: "Source Sans Pro" }}
			>
				Speed
			</LegendAttributeCaption>
			<CircularProgressbar
				value={props.list.data.speed * 10}
				text={props.list.data.speed}
			/>
		</div>
	</LegendContainer>
);

export default SearchedLegendComponent;
