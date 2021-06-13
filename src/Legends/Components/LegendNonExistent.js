import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

// Renders an error message upon the user entering a legend that does not exist
const LegendNonExistentComponent = (props) => (
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
				marginLeft: "41.5%",
			}}
		>
			"{props.legendName}" legend does not exist
		</p>
	</div>
);

export default LegendNonExistentComponent;
