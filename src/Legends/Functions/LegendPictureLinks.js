// All these links are for the legend pictures from the Brawlhalla official website: https://www.brawlhalla.com/legends/
// Function to return specific legend pictures depending on the legend inputted
const BrawlhallaLegendPicture = (legendName) => {
	if (legendName === "Bodvar") {
		return `https://www.brawlhalla.com/c/uploads/2018/11/Bodvar-1.png`;
	} else if (legendName === "Queen-Nai") {
		return `https://www.brawlhalla.com/c/uploads/2018/11/Nai.png`;
	} else if (legendName === "Dusk") {
		return "https://www.brawlhalla.com/c/uploads/2018/12/Dusk-Tile.png";
	} else if (legendName === "Fait") {
		return "https://www.brawlhalla.com/c/uploads/2019/02/Fait.png";
	} else if (legendName === "Thor") {
		return "https://www.brawlhalla.com/c/uploads/2019/05/Thor.png";
	} else if (legendName === "Petra") {
		return "https://www.brawlhalla.com/c/uploads/2019/07/petra-card.png";
	} else if (legendName === "Vector") {
		return "https://www.brawlhalla.com/c/uploads/2019/09/Vector_616x1024-616x1024.jpg";
	} else if (legendName === "Volkov") {
		return "https://www.brawlhalla.com/c/uploads/2019/12/LegendSPLASHCard_Volkov.jpg";
	} else if (legendName === "Onyx") {
		return "https://www.brawlhalla.com/c/uploads/2020/03/OnyxWallpaper_616x1024.png";
	} else if (legendName === "Jaeyun") {
		return "https://www.brawlhalla.com/c/uploads/2020/07/Jaeyun_WebSplash.jpg";
	} else if (legendName === "Mako") {
		return "https://www.brawlhalla.com/c/uploads/2020/10/Mako_650x1080.jpg";
	} else if (legendName === "Magyar") {
		return "https://www.brawlhalla.com/c/uploads/2021/01/webtilesplash_magyar.jpg";
	} else if (legendName === "Reno") {
		return "https://www.brawlhalla.com/c/uploads/2021/04/webtilesplash_Reno.jpg";
	} else {
		return `https://www.brawlhalla.com/c/uploads/2018/11/${legendName}.png`;
	}
};

/* Links for pictures:
https://brawlhalla.fandom.com/wiki/Weapons#List_of_Weapons
https://tiermaker.com/create/michal-s-favorite-weapons-in-brawlhalla-6647
https://tiermaker.com/create/brawlhalla-weapon-tier-list */
// Function to return specific weapon pictures depending on the weapon inputted
const BrawlhallaWeaponPicture = (weaponName) => {
	if (weaponName === "hammer") {
		return "https://tiermaker.com/images/chart/chart/michal-s-favorite-weapons-in-brawlhalla-6647/stoppng";
	} else if (weaponName === "sword") {
		return "https://tiermaker.com/images/chart/chart/michal-s-favorite-weapons-in-brawlhalla-6647/knivpng";
	} else if (weaponName === "pistol") {
		return "https://tiermaker.com/images/chart/chart/michal-s-favorite-weapons-in-brawlhalla-6647/pewpng";
	} else if (weaponName === "rocketlance") {
		return "https://tiermaker.com/images/chart/chart/michal-s-favorite-weapons-in-brawlhalla-6647/woshpng";
	} else if (weaponName === "spear") {
		return "https://tiermaker.com/images/chart/chart/michal-s-favorite-weapons-in-brawlhalla-6647/pokepng";
	} else if (weaponName === "katar") {
		return "https://tiermaker.com/images/chart/chart/michal-s-favorite-weapons-in-brawlhalla-6647/czkpng";
	} else if (weaponName === "axe") {
		return "https://tiermaker.com/images/chart/chart/michal-s-favorite-weapons-in-brawlhalla-6647/axpng";
	} else if (weaponName === "bow") {
		return "https://tiermaker.com/images/chart/chart/michal-s-favorite-weapons-in-brawlhalla-6647/bopng";
	} else if (weaponName === "fists") {
		return "https://tiermaker.com/images/chart/chart/michal-s-favorite-weapons-in-brawlhalla-6647/orapng";
	} else if (weaponName === "scythe") {
		return "https://tiermaker.com/images/chart/chart/michal-s-favorite-weapons-in-brawlhalla-6647/reppng";
	} else if (weaponName === "cannon") {
		return "https://tiermaker.com/images/chart/chart/michal-s-favorite-weapons-in-brawlhalla-6647/boompng";
	} else if (weaponName === "orb") {
		return "https://tiermaker.com/images/chart/chart/michal-s-favorite-weapons-in-brawlhalla-6647/ballpng";
	} else if (weaponName === "greatsword") {
		return "https://tiermaker.com/images/chart/chart/brawlhalla-weapon-tier-list/zz159544557654px-greatswordiconpng.png";
	}
};

module.exports = { BrawlhallaLegendPicture, BrawlhallaWeaponPicture };
