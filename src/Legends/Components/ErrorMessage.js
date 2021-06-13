import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

// Renders the Error message upon having an error retrieving data from the Brawlhalla API
const ErrorMessageComponent = () => (
	<div>
		<ErrorOutlineIcon
			style={{
				color: "red",
				marginLeft: "47%",
				marginTop: "5%",
				height: "7%",
				width: "7%",
			}}
		/>
		<p
			style={{
				color: "red",
				fontFamily: "Arial",
				fontSize: "25px",
				marginLeft: "30%",
			}}
		>
			Error loading data from Brawlhalla API, please try using the website again
			later
		</p>
	</div>
);

export default ErrorMessageComponent;
