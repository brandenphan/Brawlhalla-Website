import Grid from "@material-ui/core/Grid";
import { CircularProgressbar } from "react-circular-progressbar";

// Renders the searched profile information from the Brawlhalla API with styling
const SearchedProfileInformation = (props) => (
	<Grid container spacing={2} style={{ width: "100%" }}>
		<Grid item xs={12}>
			<Grid container justify="center" spacing={2}>
				<Grid
					item
					style={{
						width: "70%",
						borderColor: "#585858",
						borderStyle: "solid",
						borderRadius: "10px",
						marginTop: "2%",
					}}
				>
					<b>
						<p
							style={{
								fontSize: "40px",
								color: "black",
								textAlign: "center",
								fontFamily: "Source Sans Pro",
								marginTop: "1%",
							}}
						>
							{props.searchedProfile.data.name}
						</p>
					</b>
					<p
						style={{
							fontSize: "30px",
							color: "black",
							textAlign: "center",
							fontFamily: "Source Sans Pro",
							marginTop: "-2%",
						}}
					>
						Level: {props.searchedProfile.data.level}
						<br />
						Wins: {props.searchedProfile.data.wins}
						<br />
						Games: {props.searchedProfile.data.games}
					</p>
					<div
						style={{
							width: 200,
							height: 200,
							margin: "auto",
							marginTop: "-1%",
						}}
					>
						<CircularProgressbar
							value={props.searchedProfile.data.xp_percentage.toFixed(2) * 100}
							text={`EXP: ${
								props.searchedProfile.data.xp_percentage.toFixed(2) * 100
							}`}
						/>
					</div>
				</Grid>
			</Grid>
		</Grid>
	</Grid>
);

export default SearchedProfileInformation;
