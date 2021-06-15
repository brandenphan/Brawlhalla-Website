import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

// Renders the BrawlSearch button
const BrawlSearchButton = () => {
	const history = useHistory();

	return (
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
	);
};

export default BrawlSearchButton;
