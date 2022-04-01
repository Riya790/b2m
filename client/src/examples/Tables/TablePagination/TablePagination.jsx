/* eslint-disable */

import * as React from 'react'

import {
	gridPageCountSelector,
	gridPageSelector,
	useGridApiContext,
	useGridSelector,
} from '@mui/x-data-grid'
import { makeStyles } from '@material-ui/core/styles'

// context api
import { useMaterialUIController } from 'context'

import Pagination from '@mui/material/Pagination'

const useStyles = makeStyles((color) => ({
	ul: {
		'& .MuiPaginationItem-root': {
			color: ({ color }) => color,
		},
	},
}))

function TablePagination() {
	// hooks
	const [controller] = useMaterialUIController()
	const { darkMode } = controller

	const props = {
		color: darkMode ? 'white' : 'black',
	}

	// material style
	const classes = useStyles(props)

	const apiRef = useGridApiContext()
	const page = useGridSelector(apiRef, gridPageSelector)
	const pageCount = useGridSelector(apiRef, gridPageCountSelector)

	return (
		<Pagination
			classes={{ ul: classes.ul }}
			color={darkMode ? 'info' : 'error'}
			count={pageCount}
			page={page + 1}
			onChange={(event, value) => apiRef.current.setPage(value - 1)}
			size="large"
			showFirstButton
			showLastButton
		/>
	)
}

export default TablePagination
