import { useState } from "react";
import { Link } from "react-router-dom";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import NightsStayIcon from "@mui/icons-material/NightsStay";

type Props = {
	onToggleTheme: () => void;
	isDarkMode: boolean;
	onThemeChange: (newMode: string) => void;
};

const Navbar = ({ onToggleTheme, isDarkMode }: Props) => {
	const theme = useTheme();
	const [selected, setSelected] = useState("dashboard");

	return (
		<FlexBetween
			mb="0.25rem"
			p="0.5rem 0rem"
			style={{ color: theme.palette.primary.light }}
		>
			{/* LEFT SIDE */}
			<FlexBetween gap="0.75rem">
				<AccountBalanceIcon sx={{ fontSize: "28px" , color:theme.palette.neutral.main}} />
				<Typography
					variant="h4"
					fontSize="20px"
					style={{ color: theme.palette.neutral.main }}
				>
					FinFetch
				</Typography>
			</FlexBetween>

			{/* RIGHT SIDE */}
			<FlexBetween gap="2rem">
				<Box sx={{ "&:hover": { color: theme.palette.neutral.main } }}>
					<Link
						to="/"
						onClick={() => setSelected("dashboard")}
						style={{
							color:
								selected === "dashboard"
									? "inherit"
									: theme.palette.neutral.main,
							textDecoration: "inherit",
						}}
					>
						dashboard
					</Link>
				</Box>
				<Box sx={{ "&:hover": { color: theme.palette.neutral.main } }}>
					<Link
						to="/predictions"
						onClick={() => setSelected("predictions")}
						style={{
							color:
								selected === "predictions"
									? "inherit"
									: theme.palette.neutral.main,
							textDecoration: "inherit",
						}}
					>
						predictions
					</Link>
				</Box>
				<IconButton aria-label="Toggle Light/Dark mode" onClick={onToggleTheme} style={{color: theme.palette.neutral.main}}>
					{isDarkMode ? <Brightness4Icon /> : <NightsStayIcon />}
				</IconButton>
			</FlexBetween>
		</FlexBetween>
	);
};

export default Navbar;
