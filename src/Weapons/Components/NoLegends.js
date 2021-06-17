import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

// Renders the error message if there are no legends that use the combination of weapons entered
const NoLegends = (props) => (
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
				marginLeft: "37%",
			}}
		>
			There is no legend that uses {props.weaponOne} and {props.weaponTwo}
		</p>
	</div>
);

export default NoLegends;
