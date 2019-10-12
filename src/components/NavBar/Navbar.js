import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import {ReactComponent as CupIcon} from './svg/cup.svg'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: -64,
    },
    title: {
        flexGrow: 1,
        
    },
    links: {
        marginRight: '1em',
        marginLeft: '1em',
    }
}))

// const handleClick = (event, props) => props.dispatch(() => {
//     const anchor = event.taget
//         console.log(anchor)
//         // if (anchor) {
//         //   anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
//         // }
// })

const NavBar = () => {
    const classes = useStyles();
    const scrollTo = (selector) => {
        document.getElementById(selector).scrollIntoView({behavior: 'smooth'});
    }
    return (
        <AppBar position="sticky" className={classes.root} shadow={3}>
            <Toolbar className={classes.title} >
            <CupIcon />
            </Toolbar>
            
            <Toolbar>
                <Typography className={classes.links}>
                    <Button color="inherit" onClick={() => scrollTo('resume')}>
                        Resume
                    </Button>
                </Typography>
                <Typography className={classes.links}>
                    <Button color="inherit" onClick={() => scrollTo('work')}>
                        Work
                    </Button>
                </Typography>
                <Typography className={classes.links}>
                    <Button color="inherit" disabled>
                        Bio
                    </Button>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;