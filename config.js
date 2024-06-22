// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Violet',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon!',
	greetingEvening: 'Good evening!',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '288752458e9b0130f398aa44af330a02', // Write here your API Key
	weatherIcons: 'Nord', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '34.049',
	defaultLongitude: '74.392',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	  firstButtonsContainer: [
    {
      id: '1',
      name: 'Facebook',
      icon: 'facebook',
      link: 'https://www.facebook.com/',
    },
    {
      id: '2',
      name: 'Instagram',
      icon: 'instagram',
      link: 'https://www.instagram.com/',
    },
    {
      id: '3',
      name: 'Reddit',
      icon: 'bot',
      link: 'https://reddit.com',
    },
    {
      id: '4',
      name: 'Tiktok',
      icon: 'music-2',
      link: 'https://www.tiktok.com/foryou',
    },
    {
      id: '5',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://www.youtube.com/',
    },
    {
      id: '6',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
  ],
	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'YTmusic',
					link: 'https://music.youtube.com/',
				},
				{
					name: 'Nigga',
					link: 'https://music.youtube.com/playlist?list=PLF7ha5aPaR1iX2ScIpHfQn4iU8Sl2BR5d',
				},
				{
					name: 'W Soundtracks',
					link: 'https://music.youtube.com/playlist?list=PLF7ha5aPaR1j_Ta3JiPbFxULCg_W6IGsp',
				},
				{
					name: 'Liked Songs',
					link: 'https://music.youtube.com/playlist?list=LM',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'ChatGPT',
					link: 'https://duckduckgo.com/?t=ffab&q=chatgpt&ia=chat',
				},
				{
					name: 'sudo-flix',
					link: 'https://flix.kanded.xyz/',
				},
				{
					name: 'ComicK',
					link: 'https://comick.io/',
				},
				{
					name: 'AniWave',
					link: 'https://aniwave.to/home',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'UnixPorn',
					link: 'https://www.reddit.com/r/unixporn/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/ryuJin25',
				},
			],
		},
	],
};
