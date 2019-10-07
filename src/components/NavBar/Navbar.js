import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {CodeTwoTone, ArrowForward, Person} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        
    },
    links: {
        // background: "rgba(0,0,0,0.5)"
        marginRight: '1em',
        marginLeft: '1em'    
    }
}))


const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" color="primary" className={classes.root}>
            <Toolbar>
                <Typography variant="title" color="inherit" className={classes.title}>
                    <Person /><ArrowForward /><CodeTwoTone />
                </Typography>
                <Typography className={classes.links}>
                    <Button color="inherit">
                        Resume
                    </Button>
                </Typography>
                <Typography className={classes.links}>
                    <Button color="inherit">
                        Work
                    </Button>
                </Typography>
                <Typography className={classes.links}>
                    <Button color="inherit">
                        Contacts
                    </Button>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;