import { Button, AppBar, Toolbar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "@fontsource/source-sans-pro";

const NavBar = () => {
	const history = useHistory();

	return (
		<AppBar position="static">
			<Toolbar style={{ background: "#585858" }}>
				<Button
					style={{
						margin: "left",
						marginLeft: "5%",
						fontFamily: "cursive",
						color: "#ffd700",
						fontSize: "21px",
					}}
					onClick={() => {
						history.push("/");
					}}
				>
					BrawlSearch
				</Button>
				<Button
					color="inherit"
					style={{
						padding: "1%",
						marginLeft: "10%",
						fontSize: "17px",
						fontFamily: "Source Sans Pro",
					}}
				>
					Profiles
				</Button>
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
				<Button
					color="inherit"
					style={{
						padding: "1%",
						marginLeft: "10%",
						fontSize: "17px",
						fontFamily: "Source Sans Pro",
					}}
				>
					Weapons
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
