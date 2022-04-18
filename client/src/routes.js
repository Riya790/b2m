/* eslint-disable */

import Dashboard from 'layouts/dashboard'
import Tables from 'layouts/tables'

// @mui icons
import Icon from '@mui/material/Icon'

const routes = [
	{
		type: 'collapse',
		name: 'Dashboard',
		key: 'dashboard',
		icon: <Icon fontSize="small">dashboard</Icon>,
		route: '/dashboard',
		component: <Dashboard />,
	},
	{
		type: 'collapse',
		name: 'Tables',
		key: 'tables',
		icon: <Icon fontSize="small">table_view</Icon>,
		route: '/tables',
		component: <Tables />,
	},
]

export default routes
