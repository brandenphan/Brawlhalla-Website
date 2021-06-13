import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

const legendWeaponLinks = require("../Functions/LegendPictureLinks");
const CapitalizeName = require("../Functions/CapitalizeName");

// Styled components used in the JS file
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

// Renders the list of legends from the Brawlhalla API with styling
const List = (props) =>
	props.list.data.map((legend) => (
		<LegendContainer key={legend.legend_id}>
			<h2
				style={{
					marginLeft: "3%",
					marginTop: "10%",
					fontFamily: "Source Sans Pro",
					color: "black",
				}}
			>
				{CapitalizeName.CapitalizeName(legend.legend_name_key)}
			</h2>
			<div style={{ marginTop: "8.7%", height: "100%" }}>
				<img
					src={legendWeaponLinks.BrawlhallaLegendPicture(
						CapitalizeName.CapitalizeName(legend.legend_name_key)
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
						legend.weapon_one.toLowerCase()
					)}
					alt=""
					height="50%"
					width="10%"
					style={{ marginLeft: "38%" }}
				/>
				<img
					src={legendWeaponLinks.BrawlhallaWeaponPicture(
						legend.weapon_two.toLowerCase()
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
					value={legend.strength * 10}
					text={legend.strength}
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
					value={legend.dexterity * 10}
					text={legend.dexterity}
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
					value={legend.defense * 10}
					text={legend.defense}
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
				<CircularProgressbar value={legend.speed * 10} text={legend.speed} />
			</div>
		</LegendContainer>
	));

export default List;
