import { Button, AppBar, Toolbar } from "@material-ui/core";
import { useHistory } from "react-router-dom";

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
					}}
				>
					Profiles
				</Button>
				<Button
					color="inherit"
					style={{ padding: "1%", marginLeft: "10%", fontSize: "17px" }}
				>
					Leaderboards
				</Button>
				<Button
					color="inherit"
					style={{ padding: "1%", marginLeft: "10%", fontSize: "17px" }}
					onClick={() => {
						history.push("/Legends");
					}}
				>
					Legends
				</Button>
				<Button
					color="inherit"
					style={{ padding: "1%", marginLeft: "10%", fontSize: "17px" }}
				>
					Weapons
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
