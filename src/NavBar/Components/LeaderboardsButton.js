import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

// Renderes the Leaderboards button and highlights it if the user is on the leaderboards page
const LeaderboardsButton = () => {
	const history = useHistory();

	if (window.location.href.includes("Leaderboards")) {
		return (
			<Button
				color="inherit"
				style={{
					padding: "1%",
					marginLeft: "10%",
					fontSize: "17px",
					color: "#ffd700",
					fontFamily: "Source Sans Pro",
				}}
				onClick={() => {
					history.push("/Leaderboards");
				}}
			>
				Leaderboards
			</Button>
		);
	} else {
		return (
			<Button
				color="inherit"
				style={{
					padding: "1%",
					marginLeft: "10%",
					fontSize: "17px",
					fontFamily: "Source Sans Pro",
				}}
				onClick={() => {
					history.push("/Leaderboards");
				}}
			>
				Leaderboards
			</Button>
		);
	}
};

export default LeaderboardsButton;
