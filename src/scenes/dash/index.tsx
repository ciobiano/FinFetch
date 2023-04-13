import { Box, useMediaQuery, useTheme } from "@mui/material";

type Props = {};

const gridTemplateLargeScreen = `
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f"
    "d h i"
    "g h i"
    "g h j"
    "g h j "


    

`;

const gridTemplateSmallScreen = `
    "a "
    "a "
    "a "
    "a "
    "d "
    "d "
    "d "
    "g "
    "g "
    "g "
    "b "
    "b "
    "b "
    "b "
    "b "
    "e "
    "e "
    "h "
    "h "
    "h "
    "h "
    "c "
    "c "
    "c "
    "f"
    "f"
    "f"
    "i "
    "i"
    "j"
    "j"
`;

const Dashboard = (props: Props) => {
	const { palette } = useTheme();
	const isAboveMediumScreens = useMediaQuery("(min-width:1200px)");
	return (
		<Box
			width="100%"
			height="100%"
			display="grid"
			gap="1.5rem"
			sx={
				isAboveMediumScreens
					? {
							gridTemplateColumns: "repeat (3,minmax(370px, 1r))",
							gridTemplateRows: "repeat(10, minmax(60px,1fr))",
							gridTemplateAreas: gridTemplateLargeScreen,
					  }
					: {
							gridAutoColumns: "1fr",
							gridAutoRows: "80px",
							gridTemplateAreas: gridTemplateSmallScreen,
					  }
			}
		>
			<Box bgcolor="#fff" gridArea="a"></Box> 
			<Box bgcolor="#fff" gridArea="b"></Box>
			<Box bgcolor="#fff" gridArea="c"></Box>
			<Box bgcolor="#fff" gridArea="d"></Box>
			<Box bgcolor="#fff" gridArea="e"></Box>
			<Box bgcolor="#fff" gridArea="f"></Box>
			<Box bgcolor="#fff" gridArea="g"></Box>
			<Box bgcolor="#fff" gridArea="h"></Box>
			<Box bgcolor="#fff" gridArea="i"></Box>
			<Box bgcolor="#fff" gridArea="j"></Box>
		</Box>
	);
};

export default Dashboard;
