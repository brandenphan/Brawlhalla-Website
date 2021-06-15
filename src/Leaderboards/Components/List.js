import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const legendLinks = require("../../Legends/Functions/LegendPictureLinks");
const IdToName = require("../Functions/LegendIDtoName");

// Function that holds the flexGrow property to be used by the Grid below
const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
	},
}));

// Component that renders each player's information with styling
const EachPlayer = (props) => (
	<Grid
		item
		style={{
			width: "40%",
			borderColor: "#585858",
			borderStyle: "solid",
			borderRadius: "10px",
		}}
	>
		<p
			style={{
				fontSize: "40px",
				color: "black",
				marginLeft: "5%",
				marginTop: "17%",
			}}
		>
			{props.player.rank}
		</p>
		<p
			style={{
				fontSize: "30px",
				marginLeft: "22%",
				marginTop: "-25%",
				fontFamily: "Source Sans Pro",
			}}
		>
			<b>{props.player.name}</b>
		</p>
		<p
			style={{
				fontSize: "25px",
				marginLeft: "22%",
				marginTop: "5%",
				fontFamily: "Source Sans Pro",
			}}
		>
			Rating: {props.player.rating}
			<br />
			Peak Rating: {props.player.peak_rating}
			<br />
			Wins: {props.player.wins}
			<br />
			Games: {props.player.games}
			<br />
			Region: {props.player.region}
		</p>
		<img
			src={legendLinks.BrawlhallaLegendPicture(
				IdToName.LegendIDtoName(props.player.best_legend)
			)}
			alt=""
			width="25%"
			style={{
				borderRadius: "7px",
				marginLeft: "65%",
				marginTop: "-38%",
			}}
		/>
	</Grid>
);

// Renders the list of leaderboard players and their information
const List = (props) => {
	const classes = useStyles();
	return (
		<>
			<Grid
				container
				className={classes.root}
				spacing={2}
				style={{ width: "100%" }}
			>
				<Grid item xs={12}>
					<Grid
						container
						justify="center"
						spacing={2}
						style={{ gridGap: 12, marginTop: "2%" }}
					>
						{props.list.data.map((player) => (
							<EachPlayer key={player.brawlhalla_id} player={player} />
						))}
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default List;
