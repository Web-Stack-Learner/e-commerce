import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart, ShowChart } from '@material-ui/icons'
import Logo from '../../assets/logo.svg'
import { NavLink, useLocation } from 'react-router-dom'
import useStyles from './styles'
const Navbar = ({ totalItems }) => {
    const location = useLocation()
    console.log(location);
    const classes = useStyles()
    return (
        <React.Fragment>
            <AppBar position='fixed' color='inherit' className={classes.appBar}>
                <Toolbar>
                    <NavLink to='/'>
                        <Typography>
                            <img src={Logo} alt="commerce.js" height="25px" classname="classes.image" />
                            WebStackLearner
                        </Typography>
                    </NavLink>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                        <div className={classes.button}>

                            <NavLink to='/cart'>
                                <IconButton aria-label="Show Cart Items" color="inherit">
                                    <Badge badgeContent={totalItems} color="secondary">
                                        <ShoppingCart />
                                    </Badge>
                                </IconButton>
                            </NavLink>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Navbar
