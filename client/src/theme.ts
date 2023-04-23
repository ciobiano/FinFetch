export const tokens = {
	grey: {
		50: "#f5f5f5",
		100: "#e5e5e5",
		200: "#FBF9FC",
		300: "#c2c2c2",
		400: "#ababab",
		500: "#8c8c8c",
		600: "#707070",
		700: "#525252",
		800: "#393939",
		900: "#000000",
	},

	black: {
		100: "#cccccc",
		200: "#999999",
		300: "#666766",
		400: "#333433",
		500: "#000100",
		600: "#000100",
		700: "#000100",
		800: "#000000",
		900: "#000000",
	},

	primary: {
		100: "#e8e6ff",
		200: "#d1cdfe",
		300: "#bbb5fe",
		400: "#a49cfd",
		500: "#8d83fd",
		600: "#7169ca",
		700: "#554f98",
		800: "#383465",
		900: "#1c1a33",
	},
	secondary: {
		100: "#fff4de",
		200: "#ffe9bd",
		300: "#ffde9c",
		400: "#ffd37b",
		500: "#ffc85a",
		600: "#cca048",
		700: "#997836",
		800: "#665024",
		900: "#332812",
	},

	tertiary: {
		
      100: "#d0f9e7",
      200: "#a2f3cf",
      300: "#73edb8",
      400: "#45e7a0",
      500: "#16e188",
      600: "#12b46d",
      700: "#0d8752",
      800: "#095a36",
      900: "#042d1b"
},


	background: {
		light: "#EEEDEF",
		main: "#1f2026",
	},
};

// mui theme settings
// light mode theme
export const lightTheme = {
	palette: {
		primary: {
			...tokens.primary,
			main: tokens.primary[500],
			light: tokens.primary[600],
			
		},
		neutral: {
      ...tokens.black,
      main: tokens.black[900],

    },
		secondary: {
			...tokens.secondary,
			main: tokens.secondary[600],
		},
		tertiary: {
			...tokens.tertiary,
			main: tokens.tertiary[600],
		},
		grey: {
			...tokens.grey,
			main: tokens.grey[200],
		},
		background: {
			...tokens.grey,
			main: tokens.grey[200],
		},
	},
	typography: {
		fontFamily: ["Inter", "sans-serif"].join(","),
		fontSize: 12,
		h1: {
			fontFamily: ["Inter", "sans-serif"].join(","),
			fontSize: 32,
		},
		h2: {
			fontFamily: ["Inter", "sans-serif"].join(","),
			fontSize: 24,
		},
		h3: {
			fontFamily: ["Inter", "sans-serif"].join(","),
			fontSize: 20,
			fontWeight: 800,
			color: tokens.grey[200],
		},
		h4: {
			fontFamily: ["Inter", "sans-serif"].join(","),
			fontSize: 14,
			fontWeight: 600,
			color: tokens.grey[300],
		},
		h5: {
			fontFamily: ["Inter", "sans-serif"].join(","),
			fontSize: 12,
			fontWeight: 400,
			color: tokens.grey[500],
		},
		h6: {
			fontFamily: ["Inter", "sans-serif"].join(","),
			fontSize: 10,
			color: tokens.grey[700],
		},
	},
};

// dark mode theme
export const darkTheme = {
	palette: {
		primary: {
			...tokens.primary,
			main: tokens.primary[500],
			light: tokens.primary[400],
			neutral: tokens.grey[100],
		},
		neutral: {
			...tokens.grey,
			main: tokens.grey[400],
		},
		secondary: {
			...tokens.secondary,
			main: tokens.secondary[300],
		},
		tertiary: {
			...tokens.tertiary,
			main: tokens.tertiary[500],
		},
		grey: {
			...tokens.grey,
			main: tokens.grey[500],
		},
		background: {
			default: tokens.background.main,
			paper: tokens.grey[800],
		},
	},
	typography: {
		fontFamily: ["Inter", "sans-serif"].join(","),
		fontSize: 12,
		h1: {
			fontFamily: ["Inter", "sans-serif"].join(","),
			fontSize: 32,
		},
		h2: {
			fontFamily: ["Inter", "sans-serif"].join(","),
			fontSize: 24,
		},
		h3: {
			fontFamily: ["Inter", "sans-serif"].join(","),
			fontSize: 20,
			fontWeight: 800,
			color: tokens.grey[200],
		},
		h4: {
			fontFamily: ["Inter", "sans-serif"].join(","),
			fontSize: 14,
			fontWeight: 600,
			color: tokens.grey[300],
		},
		h5: {
			fontFamily: ["Inter", "sans-serif"].join(","),
			fontSize: 12,
			fontWeight: 400,
			color: tokens.grey[500],
		},
		h6: {
			fontFamily: ["Inter", "sans-serif"].join(","),
			fontSize: 10,
			color: tokens.grey[200],
		},
	},
};

//
export const themeSettings = (mode: any) => ({
	...lightTheme,

});
