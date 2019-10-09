import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {CodeTwoTone} from '@material-ui/icons'
// import { ThemeProvider } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginBottom: -theme.mixins.toolbar.minHeight
    },
    title: {
        flexGrow: 1,
        
    },
    links: {
        // background: "rgba(0,0,0,0.5)"
        marginRight: '1em',
        marginLeft: '1em',
        flexGrow: 1,

    }
}))

// const theme = createMuiTheme({

// });

const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar position="sticky" className={classes.root} shadow={3}>
            <Toolbar>
                <Typography className={classes.links}>
                    <Button color="inherit" href="#resume">
                        Resume
                    </Button>
                </Typography>
                <Typography className={classes.links}>
                    <Button color="inherit" href="#work">
                        Work
                    </Button>
                </Typography>
                <Typography className={classes.links}>
                    <Button color="inherit" href="#bio" disabled>
                        Bio
                    </Button>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;