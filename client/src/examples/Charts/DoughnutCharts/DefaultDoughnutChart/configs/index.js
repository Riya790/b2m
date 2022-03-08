/* eslint-disable */

import colors from 'assets/theme/base/colors'

const { countries, gradients, dark } = colors

function configs(labels, datasets, cutout = 60) {
	const backgroundColors = []

	if (datasets.backgroundColors) {
		datasets.backgroundColors.forEach((color) =>
			gradients[color]
				? backgroundColors.push(gradients[color].state)
				: countries[color]
				? backgroundColors.push(countries[color].main)
				: backgroundColors.push(dark.main)
		)
	} else {
		backgroundColors.push(dark.main)
	}

	return {
		data: {
			labels,
			datasets: [
				{
					label: datasets.label,
					weight: 9,
					cutout,
					tension: 0.9,
					pointRadius: 2,
					borderWidth: 2,
					backgroundColor: backgroundColors,
					fill: false,
					data: datasets.data,
				},
			],
		},
		options: {
			tooltips: {
				enabled: false,
			},
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: {
					display: true,
					position: 'bottom',
					labels: {
						color: 'white',
						boxWidth: 15,
						padding: 27,
						pieceLabel: {
							mode: 'percentage',
							render: 'value',
						},
					},
				},
				datalabels: {
					display: true,
					color: 'black',
					labels: {
						padding: { top: 10 },
						title: {
							font: {
								weight: 'bold',
							},
						},
						value: {
							color: 'green',
						},
					},
					formatter: (value) => {
						return '\n' + value + '%'
					},
				},
			},
			interaction: {
				intersect: false,
				mode: 'index',
			},
			scales: {
				y: {
					grid: {
						drawBorder: false,
						display: false,
						drawOnChartArea: false,
						drawTicks: false,
					},
					ticks: {
						display: false,
					},
				},
				x: {
					grid: {
						drawBorder: false,
						display: false,
						drawOnChartArea: false,
						drawTicks: false,
					},
					ticks: {
						display: false,
					},
				},
			},
		},
	}
}

export default configs
