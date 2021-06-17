import { TextField, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

// Renders the search form
const SearchForm = ({
	searchTermOne,
	searchTermTwo,
	handleSearchOne,
	handleSearchTwo,
	handleClearButton,
	handleSearchSubmit,
}) => (
	<form onSubmit={handleSearchSubmit} style={{ padding: "1%" }}>
		<TextField
			onChange={handleSearchOne}
			value={searchTermOne}
			style={{ width: "45%", marginLeft: "2.5%" }}
			placeholder="Weapon 1"
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
		/>
		<TextField
			onChange={handleSearchTwo}
			value={searchTermTwo}
			style={{ width: "45%", marginLeft: "5%" }}
			placeholder="Weapon 2"
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
		/>
		<Button
			disabled={!searchTermOne && !searchTermTwo}
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
			disabled={!searchTermOne && !searchTermTwo}
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
