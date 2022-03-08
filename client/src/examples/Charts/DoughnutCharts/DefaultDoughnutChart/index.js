/* eslint-disable */

import { useMemo } from 'react'

// porp-types is a library for typechecking of props
import PropTypes from 'prop-types'

// react-chartjs-2 components
import { Doughnut } from 'react-chartjs-2'

// @mui material components
import { Icon, Card } from '@mui/material'

// Material Dashboard 2 React components
import MDBox from 'components/MDBox'
import MDTypography from 'components/MDTypography'

// DefaultDoughnutChart configurations
import configs from 'examples/Charts/DoughnutCharts/DefaultDoughnutChart/configs'

function DefaultDoughnutChart({ color, title, description, date, chart }) {
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
							<Doughnut data={data} options={options} />
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
				</MDBox>
			</MDBox>
		</Card>
	)
}

// Setting default values for the props of ReportsBarChart
DefaultDoughnutChart.defaultProps = {
	color: 'dark',
	description: '',
}

// Typechecking props for the ReportsBarChart
DefaultDoughnutChart.propTypes = {
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

export default DefaultDoughnutChart
