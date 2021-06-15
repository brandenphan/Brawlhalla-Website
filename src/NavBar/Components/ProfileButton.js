import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

// Renders the Profile button and highlights it if the user is on the profiles page
const ProfileButton = () => {
	const history = useHistory();

	if (window.location.href.includes("Profiles")) {
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
					history.push("/Profiles");
				}}
			>
				Profiles
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
					history.push("/Profiles");
				}}
			>
				Profiles
			</Button>
		);
	}
};

export default ProfileButton;
