/* eslint-disable */

import React, { useState, useEffect } from 'react'

// @mui material components
import Grid from '@mui/material/Grid'

// Material Dashboard 2 React components
import MDBox from 'components/MDBox'


import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import ReportsBarChart from 'examples/Charts/BarCharts/ReportsBarChart'
import ReportsPieChart from 'examples/Charts/PieChart'
import DefaultDoughnutChart from 'examples/Charts/DoughnutCharts/DefaultDoughnutChart'



// api

import { CurrencyChart } from '../../api/ReadData'

function Dashboard() {
	// usestate
	const [length, setLength] = useState(0)
	const [currency, setCurrency] = useState({})
	const [dues, setDues] = useState({})
	const [U001, setU001] = useState({})
	const [U002, setU002] = useState({})
	const [U005, setU005] = useState({})
	const [U007, setU007] = useState({})
	const [U013, setU013] = useState({})
	const [CA02, setCA02] = useState({})

	// fetching chart from api
	useEffect(() => {
		CurrencyChart().then((data) => {
			setCurrency(data.currency)
			setDues(data.isOpen)
			setLength(data.count.total)
			setU001(data.U001)
			setU002(data.U002)
			setU005(data.U005)
			setU007(data.U007)
			setU013(data.U013)
			setCA02(data.CA02)
		})
	}, [])


	return (
		<>
			<DashboardNavbar />
			<MDBox py={3}>
			
				<MDBox mt={4.5}>
					<Grid container spacing={3}>
						<Grid item xs={12} md={12} lg={12}>
							<MDBox mb={3} height="100vh">
								<ReportsBarChart
									color="primary"
									title="Business & Customer"
									description="Business Categery wise Report"
									// date="campaign sent 2 days ago"
									chart={{
										labels: [
											'Johnson & Johnson',
											'Bose',
											"Kellog's",
											'Sony',
											'Puma',
											'Unilever',
										],
										datasets: {
											label: 'Number of Customer',
											label2: 'Total Open Amount',
											data: [
												U001.total,
												U002.total,
												U005.total,
												U007.total,
												U013.total,
												CA02.total,
											],
											data2: [
												U001.open,
												U002.open,
												U005.open,
												U007.open,
												U013.open,
												CA02.open,
											],
										},
									}}
								/>
							</MDBox>
						</Grid>

						<Grid item xs={12} md={6} lg={6}>
							<MDBox mb={3} height="73vh">
								<ReportsPieChart
									color="dark"
									title="Currency"
									description="Customer Currency Report"
									// date="campaign sent 2 days ago"
									chart={{
										labels: ['USD', 'CAD'],
										datasets: {
											label: 'Currency',
											data: [
												((currency.USD / length) * 100).toFixed(2),
												((currency.CAD / length) * 100).toFixed(2),
											],
											backgroundColors: ['usa', 'canada'],
											hoverOffset: 4,
											borderColor: '#fff',
										},
									}}
								/>
							</MDBox>
						</Grid>

					

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

					
					</Grid>
				</MDBox>
			
			
			</MDBox>
			
		</>
	)
}

export default Dashboard
