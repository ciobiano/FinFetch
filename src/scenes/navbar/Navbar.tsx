import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import FlexBetween from "@/components/FlexBetween";
import DeblurIcon from "@mui/icons-material/Deblur";

type Props = {};

const Navbar = (props: Props) => {
	const { palette } = useTheme();
	const [selected, setSelected] = useState("dashboard");

	return (
		<FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
			<FlexBetween gap="0.75rem">
				<DeblurIcon sx={{ fontsize: "40px" }} />
				<Typography variant="h4" fontSize="20px">
					FinFetch
				</Typography>
			</FlexBetween>
			{/* Right side  */}
			<FlexBetween gap="1.5rem">
				<Box sx={{ "&:hover": { color: palette.grey[100] } }}>
					<Link
						to="/"
						onClick={() => setSelected("dashboard")}
						style={{
							color: selected === "dashboard" ? "inherit" : palette.grey[700],
							textDecoration: "inherit",
						}}
					>
						dashboard
					</Link>
				</Box>
				<Box sx={{ "&:hover": { color: palette.grey[100] } }}>
					<Link
						to="/forecast"
						onClick={() => setSelected("Forecast")}
						style={{
							color: selected === "Forecast" ? "inherit" : palette.grey[700],
							textDecoration: "inherit",
						}}
					>
						Forecast
					</Link>
				</Box>
			</FlexBetween>
		</FlexBetween>
	);
};

export default Navbar;
