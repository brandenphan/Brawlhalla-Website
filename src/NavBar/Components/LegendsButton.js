import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

// Renders the Legends button and highlights it if the user is on the legends page
const LegendsButton = () => {
	const history = useHistory();

	if (window.location.href.includes("Legends")) {
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
					history.push("/Legends");
				}}
			>
				Legends
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
					history.push("/Legends");
				}}
			>
				Legends
			</Button>
		);
	}
};

export default LegendsButton;
