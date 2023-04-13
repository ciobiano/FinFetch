
import  DashboardBox  from "@/components/DashboardBox";

type Props = {};

const TextData = (props: Props) => {
	return (
		<>
			<DashboardBox gridArea="h"></DashboardBox>
			<DashboardBox gridArea="i"></DashboardBox>
			<DashboardBox gridArea="j"></DashboardBox>
		</>
	);
};

export default TextData;
