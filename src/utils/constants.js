const constants = {
	APP_NAME: "Tephra",
	APP_DESCRIPTION: "Eruption of innovation",
	APP_ABOUT:
		"%APP_NAME% aims to build a new creative economy — a world where creators can use the Nervos blockchain to value their work in entirely new ways, and build stronger connections with their supporters.",
	APP_WEBSITE: "https://tephra.app",
	APP_SCAN_BASE_URL: "https://gw-explorer.nervosdao.community/",
	SOCIAL: {
		TWITTER_HANDLE: "tephra-app",
		GITHUB_HANDLE: "tephra-app",
	},
	STATE_TYPES: ["Available", "Sale", "Auction", "Raffle", "Loan"],
	STATE_EMPTY_MESSAGE_MAP: [
		'Looks like nothing\'s "Available" here 🤔',
		'Sorry pal, nothing\'s "On Sale" right now 😔',
		'This place is currently "Auctioned" away 😶',
		'This area seems to be "Raffled" off 📪',
		'This section is on "Loan" 🤩',
	],
	STATE_TYPES_KEYS: ["sale", "auction", "raffle", "loan"],
	STATE_EMOJI_MAP: {
		sale: "💰",
		auction: "⌛",
		raffle: "🎲",
		loan: "🏦",
	},
	CREATE_ACCEPTED_MIMETYPES: [
		"image/jpeg",
		"image/png",
		// "video/mp4",
	],
	DOCUMENTATION: {
		base: "https://github.com/sqwid-app/sqwid-docs",
		sale: "https://github.com/sqwid-app/sqwid-docs/blob/main/market_interaction/regular_sale.md",
		auction:
			"https://github.com/sqwid-app/sqwid-docs/blob/main/market_interaction/auction.md",
		raffle: "https://github.com/sqwid-app/sqwid-docs/blob/main/market_interaction/raffle.md",
		loan: "https://github.com/sqwid-app/sqwid-docs/blob/main/market_interaction/loan.md",
	},
	EXPLORE_PAGINATION_LIMIT: 12,
	COPY_WARNING: "Use this address only on the Godwoken",
};

export default constants;
