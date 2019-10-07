import React from 'react'
import clsx from 'clsx'
import Game from '../Game'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Typography} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
    hero: {
        height: '100vh',
        width: '100vw',
        paddingTop: -theme.mixins.toolbar.minHeight
    },
    heroBaseImage: {
        background: "black url('/29088.jpg') no-repeat fixed center",
    },
    heroOverlay: {
        background: "rgba(0,0,0,0.9)",
    },
    heroText: {
        color: "#DDD",
        padding: '3em',
        borderRadius: '1em'
        
    }
})) 

const Hero = () => {

    const classes = useStyles();

    return (
        <Grid className={clsx(classes.hero, classes.heroBaseImage)}>
            <Grid className={clsx(classes.hero, classes.heroOverlay)}>
                <Grid container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.hero}
                >
                    <Grid item >
                    <Game />
                    </Grid>
                    <Grid item className={classes.heroText}>
                        <Typography variant="h2" component="h2" color="common-white">
                            Alexander Grinevich
                        </Typography>
                        <Typography component="p" color="secondary">
                            Full Stack Web Developer
                        </Typography>
                    </Grid>    
                </Grid>
            </Grid>
        </Grid>
        
    )
}

export default Hero;