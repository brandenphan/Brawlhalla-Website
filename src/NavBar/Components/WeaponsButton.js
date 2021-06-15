import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

// Renders the Weapons button and highlights it if the user is on the weapons page
const WeaponsButton = () => {
	const history = useHistory();

	if (window.location.href.includes("Weapons")) {
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
					history.push("/Weapons");
				}}
			>
				Weapons
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
					history.push("/Weapons");
				}}
			>
				Weapons
			</Button>
		);
	}
};

export default WeaponsButton;
