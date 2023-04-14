import DashboardBox from '@/components/DashboardBox';
import {useGetKpisQuery} from '@/state/api'

type Props = {}

const ChartData = (props: Props) => {
    const {data}= useGetKpisQuery();
	console.log("data:",data);
  return (
		<>
			<DashboardBox gridArea="d"></DashboardBox>
			<DashboardBox gridArea="e"></DashboardBox>
			<DashboardBox gridArea="f"></DashboardBox>
			<DashboardBox gridArea="g"></DashboardBox>
		</>
	);
}

export default ChartData




