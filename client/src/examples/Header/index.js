/* eslint-disable */

import React from 'react'

import { Grid } from '@mui/material'
import { Image } from 'react-bootstrap'

import './header.css'

import product from '../../../src/assets/images/hrc/Group 20399.svg'
import company from '../../../src/assets/images/hrc/logo.svg'

const Header = () => {
	return (
		<header>
			<Grid container>
				<Grid item xs={12} sm={12} lg={5}>
					<Image className="shadow" src={product} responsive />
				</Grid>

				<Grid item xs={12} sm={12} lg={7}>
					<Image className="shadow" src={company} responsive />
				</Grid>
			</Grid>
		</header>
	)
}

export default Header
