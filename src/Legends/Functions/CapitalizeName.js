const CapitalizeName = (legend) => {
	let capitalized = legend.replace(" ", "-");
	capitalized = capitalized.charAt(0).toUpperCase() + capitalized.slice(1);
	capitalized = capitalized
		.split("-")
		.map((e) => e.charAt(0).toUpperCase() + e.slice(1))
		.join("-");
	return capitalized;
};

module.exports = { CapitalizeName };
