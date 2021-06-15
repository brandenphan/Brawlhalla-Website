import { AppBar, Toolbar } from "@material-ui/core";
import "@fontsource/source-sans-pro";

import BrawlSearchButton from "./Components/BrawlSearchButton";
import ProfileButton from "./Components/ProfileButton";
import LeaderboardsButton from "./Components/LeaderboardsButton";
import LegendsButton from "./Components/LegendsButton";
import WeaponsButton from "./Components/WeaponsButton";

// Combines all the button components and Appbar to create the web-applications universal NavBar
const NavBar = () => (
	<AppBar position="static">
		<Toolbar style={{ background: "#585858" }}>
			<BrawlSearchButton />
			<ProfileButton />
			<LeaderboardsButton />
			<LegendsButton />
			<WeaponsButton />
		</Toolbar>
	</AppBar>
);

export default NavBar;
