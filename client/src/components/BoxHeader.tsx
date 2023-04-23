import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import FlexBetween from "./FlexBetween";

type Props = {
  title: string;
  sideText: string;
  subtitle?: string;
  icon?: React.ReactNode;
};

const BoxHeader = ({ icon, title, subtitle, sideText }: Props) => {
   const theme = useTheme();
  return (
		<FlexBetween margin="1.5rem 1rem 0 1rem">
			<FlexBetween>
				{icon}
				<Box width="100%">
					<Typography
						variant="h4"
						mb="-0.1rem"
						style={{ color: theme.palette.neutral.main }}
					>
						{title}
					</Typography>
					<Typography variant="h6">{subtitle}</Typography>
				</Box>
			</FlexBetween>
			<Typography
				variant="h5"
				fontWeight="700"
				style={{ color: theme.palette.tertiary.main }}
			>
				{sideText}
			</Typography>
		</FlexBetween>
	);
};

export default BoxHeader;
