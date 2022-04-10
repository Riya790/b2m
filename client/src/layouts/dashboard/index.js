/* eslint-disable */

import React, { useState, useEffect } from 'react'

// @mui material components
import Grid from '@mui/material/Grid'

// Material Dashboard 2 React components
import MDBox from 'components/MDBox'

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import Footer from 'examples/Footer'
import ReportsBarChart from 'examples/Charts/BarCharts/ReportsBarChart'
import ReportsLineChart from 'examples/Charts/LineCharts/ReportsLineChart'
import ReportsPieChart from 'examples/Charts/PieChart'
import DefaultDoughnutChart from 'examples/Charts/DoughnutCharts/DefaultDoughnutChart'
import ComplexStatisticsCard from 'examples/Cards/StatisticsCards/ComplexStatisticsCard'

// Data
import reportsBarChartData from 'layouts/dashboard/data/reportsBarChartData'
import reportsLineChartData from 'layouts/dashboard/data/reportsLineChartData'
import reportsPieChartData from 'layouts/dashboard/data/reportsPieChartData'
import reportsDoughnutChartData from 'layouts/dashboard/data/reportsDoughnutChartData'

// api

import { ReadData } from '../../api/ReadData'
import { CurrencyChart } from '../../api/ReadData'

// Dashboard components
// import Projects from "layouts/dashboard/components/Projects";
// import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard() {
	// usestate
	const [length, setLength] = useState(0)
	const [currency, setCurrency] = useState({})
	const [dues, setDues] = useState({})

	// fetching chart from api
	useEffect(() => {
		CurrencyChart().then((data) => {
			setCurrency(data.currency)
			setDues(data.isOpen)
			setLength(data.count.total)
		})
	}, [])

	const { sales, tasks } = reportsLineChartData

	return (
		<DashboardLayout>
			<DashboardNavbar />
			<MDBox py={3}>
				{/* <Grid container spacing={3}>
					<Grid item xs={12} md={6} lg={3}>
						<MDBox mb={1.5}>
							<ComplexStatisticsCard
								color="dark"
								icon="weekend"
								title="Bookings"
								count={281}
								percentage={{
									color: 'success',
									amount: '+55%',
									label: 'than lask week',
								}}
							/>
						</MDBox>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<MDBox mb={1.5}>
							<ComplexStatisticsCard
								icon="leaderboard"
								title="Today's Users"
								count="2,300"
								percentage={{
									color: 'success',
									amount: '+3%',
									label: 'than last month',
								}}
							/>
						</MDBox>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<MDBox mb={1.5}>
							<ComplexStatisticsCard
								color="success"
								icon="store"
								title="Revenue"
								count="34k"
								percentage={{
									color: 'success',
									amount: '+1%',
									label: 'than yesterday',
								}}
							/>
						</MDBox>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<MDBox mb={1.5}>
							<ComplexStatisticsCard
								color="primary"
								icon="person_add"
								title="Followers"
								count="+91"
								percentage={{
									color: 'success',
									amount: '',
									label: 'Just updated',
								}}
							/>
						</MDBox>
					</Grid>
				</Grid> */}
				<MDBox mt={4.5}>
					<Grid container spacing={3}>
						{/* <Grid item xs={12} md={6} lg={6}>
							<MDBox mb={3} height="73vh">
								<ReportsBarChart
									color="info"
									title="website views"
									description="Last Campaign Performance"
									date="campaign sent 2 days ago"
									chart={reportsBarChartData}
								/>
							</MDBox>
						</Grid> */}
						<Grid item xs={12} md={6} lg={6}>
							<MDBox mb={3} height="73vh">
								<ReportsPieChart
									color="dark"
									title="Currency"
									description="Customer Currency Report"
									// date="campaign sent 2 days ago"
									chart={{
										labels: ['USD', 'CAD', 'INR'],
										datasets: {
											label: 'Currency',
											data: [
												((currency.USD / length) * 100).toFixed(2),
												((currency.CAD / length) * 100).toFixed(2),
												((currency.inr / length) * 100).toFixed(2),
											],
											backgroundColors: ['usa', 'canada', 'india'],
											hoverOffset: 4,
											borderColor: '#fff',
										},
									}}
								/>
							</MDBox>
						</Grid>

						{/* <Grid item xs={12} md={6} lg={6}>
							<MDBox mb={3} height="73vh">
								<ReportsLineChart
									color="success"
									title="daily sales"
									description={
										<>
											(<strong>+15%</strong>) increase in today sales.
										</>
									}
									date="updated 4 min ago"
									chart={sales}
								/>
							</MDBox>
						</Grid> */}

						<Grid item xs={12} md={6} lg={6}>
							<MDBox mb={3} height="73vh">
								<DefaultDoughnutChart
									color="dark"
									title="Customer Dues"
									description="Customer Dues Report"
									// date="campaign sent 2 days ago"
									chart={{
										labels: ['Paid', 'Unpaid'],
										datasets: {
											label: 'Customer Due',
											data: [
												((dues.close / length) * 100).toFixed(2),
												((dues.open / length) * 100).toFixed(2),
											],
											backgroundColors: ['info', 'error'],
											hoverOffset: 4,
											borderColor: '#fff',
										},
									}}
								/>
							</MDBox>
						</Grid>

						<Grid item xs={12} md={12} lg={12}>
							<MDBox mb={3} height="73vh">
								<ReportsLineChart
									color="dark"
									title="completed tasks"
									description="Last Campaign Performance"
									date="just updated"
									chart={tasks}
								/>
							</MDBox>
						</Grid>
						{/* <Grid item xs={12} md={12} lg={12}>
							<MDBox mb={3} height="73vh">
								<PieChart
									color="dark"
									title="completed tasks"
									description="Last Campaign Performance"
									date="just updated"
									// chart={tasks}
								/>
							</MDBox>
						</Grid> */}
					</Grid>
				</MDBox>
				{/* <MDBox> */}
				{/* <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid> */}
				{/* </MDBox> */}
			</MDBox>
			<Footer />
		</DashboardLayout>
	)
}

export default Dashboard
