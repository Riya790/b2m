/* eslint-disable */

import { useMemo } from 'react'

// porp-types is a library for typechecking of props
import PropTypes from 'prop-types'

// react-chartjs-2 components
import { Pie } from 'react-chartjs-2'
import { Chart } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
Chart.register(ChartDataLabels)

// @mui material components
import { Icon, Card, Divider } from '@mui/material'

// Material Dashboard 2 React components
import MDBox from 'components/MDBox'
import MDTypography from 'components/MDTypography'

// PieChart configurations
import configs from 'examples/Charts/PieChart/configs'

function ReportsPieChart({ color, title, description, date, chart }) {
	const { data, options } = configs(chart.labels || [], chart.datasets || {})

	return (
		<Card sx={{ height: '100%' }}>
			<MDBox padding="1rem">
				{useMemo(
					() => (
						<MDBox
							variant="gradient"
							bgColor={color}
							borderRadius="lg"
							coloredShadow={color}
							py={2}
							pr={0.5}
							mt={-5}
							height="65vh"
						>
							<Pie data={data} options={options} />
						</MDBox>
					),
					[chart, color]
				)}
				<MDBox pt={2} pb={1} px={1}>
					<MDTypography variant="h6" textTransform="capitalize">
						{title}
					</MDTypography>
					<MDTypography
						component="div"
						variant="button"
						color="text"
						fontWeight="light"
					>
						{description}
					</MDTypography>
					{/* <Divider /> */}
					{/* <MDBox display="flex" alignItems="center">
            <MDTypography variant="button" color="text" lineHeight={1} sx={{ mt: 0.15, mr: 0.5 }}>
              <Icon>schedule</Icon>
            </MDTypography>
            <MDTypography variant="button" color="text" fontWeight="light">
              {date}
            </MDTypography>
          </MDBox> */}
				</MDBox>
			</MDBox>
		</Card>
	)
}

// Setting default values for the props of ReportsBarChart
ReportsPieChart.defaultProps = {
	color: 'dark',
	description: '',
}

// Typechecking props for the ReportsBarChart
ReportsPieChart.propTypes = {
	color: PropTypes.oneOf([
		'primary',
		'secondary',
		'info',
		'success',
		'warning',
		'error',
		'dark',
	]),
	title: PropTypes.string.isRequired,
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	date: PropTypes.string,
	chart: PropTypes.objectOf(
		PropTypes.oneOfType([PropTypes.array, PropTypes.object])
	).isRequired,
}

export default ReportsPieChart
