import { Box } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { SetStateAction, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lightTheme, darkTheme } from "./theme";
import Navbar from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard";
import Predictions from "@/scenes/predictions";

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [mode, setMode] = useState("light");

	const handleThemeChange = (newMode: SetStateAction<string>) => {
		setMode(newMode);
	};

	const theme = useMemo(
		() => createTheme(isDarkMode ? darkTheme : lightTheme),
		[isDarkMode]
	);

	const handleToggleTheme = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};

	return (
		<div className="app">
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Box
						sx={{
							width: "100%",
							height: "100%",
							padding: "1rem 2rem 4rem 2rem",
							backgroundColor: theme.palette.background.default,
						}}
					>
						<Navbar
							onThemeChange={handleThemeChange}
							onToggleTheme={handleToggleTheme}
							isDarkMode={isDarkMode}
						/>
						<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route path="/predictions" element={<Predictions />} />
						</Routes>
					</Box>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
