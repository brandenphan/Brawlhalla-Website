import Grid from "@material-ui/core/Grid";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

const legendLinks = require("../Functions/LegendPictureLinks");
const CapitalizeName = require("../Functions/CapitalizeName");

// Styled component used in the JS file
const LegendAttributeCaption = styled.p`
	font-size: 15px;
`;

// Component that renders each legends information with styling
const EachLegend = (props) => (
	<Grid
		item
		style={{
			width: "70%",
			borderColor: "#585858",
			borderStyle: "solid",
			borderRadius: "10px",
		}}
	>
		<h2
			style={{
				marginLeft: "3%",
				marginTop: "12%",
				fontFamily: "Source Sans Pro",
				color: "black",
			}}
		>
			{CapitalizeName.CapitalizeName(props.legend.legend_name_key)}
		</h2>
		<Grid item style={{ marginTop: "6%" }}>
			<div
				style={{
					width: 100,
					height: 100,
					marginLeft: "15%",
					marginTop: "-17%",
				}}
			>
				<LegendAttributeCaption
					style={{ marginLeft: "20%", fontFamily: "Source Sans Pro" }}
				>
					Strength
				</LegendAttributeCaption>
				<CircularProgressbar
					value={props.legend.strength * 10}
					text={props.legend.strength}
				/>
			</div>
			<div
				style={{
					width: 100,
					height: 100,
					marginLeft: "15%",
					marginTop: "5%",
				}}
			>
				<LegendAttributeCaption
					style={{ marginLeft: "20%", fontFamily: "Source Sans Pro" }}
				>
					Dexterity
				</LegendAttributeCaption>
				<CircularProgressbar
					value={props.legend.dexterity * 10}
					text={props.legend.dexterity}
				/>
			</div>
			<div
				style={{
					width: 100,
					height: 100,
					marginLeft: "30%",
					marginTop: "-21.3%",
				}}
			>
				<LegendAttributeCaption
					style={{ marginLeft: "20%", fontFamily: "Source Sans Pro" }}
				>
					Defense
				</LegendAttributeCaption>
				<CircularProgressbar
					value={props.legend.defense * 10}
					text={props.legend.defense}
				/>
			</div>
			<div
				style={{
					width: 100,
					height: 100,
					marginLeft: "30%",
					marginTop: "5%",
				}}
			>
				<LegendAttributeCaption
					style={{ marginLeft: "25%", fontFamily: "Source Sans Pro" }}
				>
					Speed
				</LegendAttributeCaption>
				<CircularProgressbar
					value={props.legend.speed * 10}
					text={props.legend.speed}
				/>
			</div>
		</Grid>
		<Grid style={{ marginTop: "-14%" }}>
			<img
				src={legendLinks.BrawlhallaWeaponPicture(
					props.legend.weapon_one.toLowerCase()
				)}
				alt=""
				height="30%"
				width="10%"
				style={{ marginLeft: "46%", marginBottom: "10%" }}
			/>
			<img
				src={legendLinks.BrawlhallaWeaponPicture(
					props.legend.weapon_two.toLowerCase()
				)}
				alt=""
				height="30%"
				width="10%"
				style={{ marginLeft: "6%", marginBottom: "10%" }}
			/>
		</Grid>
		<Grid style={{ marginTop: "-2%" }}>
			<img
				src={legendLinks.BrawlhallaLegendPicture(
					CapitalizeName.CapitalizeName(props.legend.legend_name_key)
				)}
				alt=""
				width="17.5%"
				style={{
					marginLeft: "80%",
					borderRadius: "7px",
					marginTop: "-30%",
				}}
			/>
		</Grid>
	</Grid>
);

// Renders the list of legends from their Brawlhalla API
const List = (props) => (
	<Grid container spacing={2} style={{ width: "100%" }}>
		<Grid item xs={12}>
			<Grid
				container
				justify="center"
				spacing={2}
				style={{ gridGap: 12, marginTop: "2%" }}
			>
				{props.list.data.map((legend) => (
					<EachLegend key={legend.legend_id} legend={legend} />
				))}
			</Grid>
		</Grid>
	</Grid>
);

export default List;
