import { useMemo } from "react";
import { themeSettings } from "./theme";
import { createTheme } from "@mui/material/styles";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@/scenes/navbar/Navbar";
import Dashboard from "@/scenes/dash";

function App() {
	const theme = useMemo(() => createTheme(themeSettings), []);
	return (
		<div className="App">
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<CssBaseline />

					<Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
						<Navbar />
						<Routes>
							<Route path="/" element={<Dashboard/>} />
							<Route path="/forecast" element={<div>Forecast Page</div>} />
						</Routes>
					</Box>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
