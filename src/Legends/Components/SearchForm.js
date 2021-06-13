import { TextField, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

// Renders the search form to allow the user to enter a legend and search for it, and also clear the search field and the legend they searched for
const SearchForm = ({
	searchTerm,
	handleSearch,
	handleClearButton,
	handleSearchSubmit,
}) => (
	<form onSubmit={handleSearchSubmit}>
		<TextField
			value={searchTerm}
			style={{
				width: "95%",
				marginLeft: "2.5%",
				marginTop: "2%",
			}}
			InputProps={{
				disableUnderline: true,
				style: {
					fontSize: "25px",
					borderBottom: "1px solid white",
					color: "white",
				},
				startAdornment: (
					<InputAdornment position="start">
						<SearchIcon style={{ color: "white" }} />
					</InputAdornment>
				),
			}}
			onChange={handleSearch}
		></TextField>
		<Button
			disabled={!searchTerm}
			variant="outlined"
			onClick={handleClearButton}
			style={{
				padding: "1%",
				width: "20%",
				marginTop: "2%",
				marginLeft: "25%",
				borderColor: "white",
				color: "white",
				fontFamily: "Source Sans Pro",
			}}
		>
			Clear
		</Button>
		<Button
			type="submit"
			disabled={!searchTerm}
			variant="contained"
			style={{
				padding: "1%",
				width: "20%",
				marginTop: "2%",
				marginLeft: "10%",
				backgroundColor: "#5DCED4",
				color: "black",
				fontFamily: "Source Sans Pro",
			}}
		>
			Search
		</Button>
	</form>
);

export default SearchForm;
