const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json());

// API Route
app.get("/api/server-details", (req, res) => {
	const serverDetails = {
		title: "! RC3-BASEMAPS",
		description:
			"Server protected by The_K-50 AntiCheat. Visit us: www.epg.gg | Discord: https://discord.gg/3r5NK4d",
		settings: {
			Region: "Europe - DE",
			PunkBuster: "ON",
			FairFight: "ON",
			Password: "OFF",
			Preset: "Normal",
		},
		advanced: {
			Minimap: "ON",
			"Only Squad Leader Spawn": "OFF",
			Vehicles: "ON",
			"Team Balance": "ON",
			"Minimap Spotting": "ON",
			HUD: "ON",
			"3P Vehicle Cam": "ON",
			"Regenerative Health": "ON",
			"Kill Cam": "ON",
			"Friendly Fire": "OFF",
			"3D Spotting": "ON",
		},
		rules: {
			Tickets: 400,
			"Vehicle Spawn Delay": 25,
			"Bullet Damage": 100,
			"Kick After Team Kills": 5,
			"Player Health": 100,
			"Player Respawn Time": 100,
			"Kick After Idle": 300,
			"Ban After Kicks": 3,
		},
	};

	res.json(serverDetails);
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
