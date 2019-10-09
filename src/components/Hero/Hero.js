import React from 'react'
import clsx from 'clsx'
import uuid from 'react-uuid'
import Game from '../Game'
import {makeStyles} from '@material-ui/core/styles'
import {Button, Grid, Typography} from '@material-ui/core/'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const useStyles = makeStyles(theme => ({
    "@keyframes arrowPuff": {
        "0%": {
            transform: "rotate(90deg) translate(0,0)",
            opacity: 0
        },
        "40%": {
            transform: "rotate(90deg) translate(20px,0)",
            opacity: 1
        },
        "60%": {
            opacity: 0
        },
        "100%": {
            transform: "rotate(90deg) translate(0,0)"
        }

    },
    "@keyframes arrowDown": {
        from: {
            transform: "rotate(90deg) translate(0,0)",
            opacity: 0
        },
        to: {
            transform: "rotate(90deg) translate(20px,0)",
            opacity: 1
        }

    },
    hero: {
        height: '100vh',
        width: '100vw',
        marginTop: -theme.mixins.toolbar.minHeight,
        paddingTop: theme.mixins.toolbar.minHeight
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
        
    },
    arrow: {
        transform: 'rotate(90deg)',
        color: theme.palette.primary.contrastText,
        width: 36,
        height: 36,
        animationName: '$arrowDown',
        animationDuration: '3s',
        animationIterationCount: 'infinite',
        animationFillMode: 'forward'
    }
})) 

const Hero = () => {

    const classes = useStyles();

    return (
        <Grid className={clsx(classes.hero, classes.heroBaseImage)} key={uuid()}>
            <Grid className={clsx(classes.hero, classes.heroOverlay)} key={uuid()}>
                <Grid container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.hero}
                >
                    <Grid item key={uuid()}>
                    <Game />
                    </Grid>
                    <Grid item className={classes.heroText} key={uuid()}>
                        <Typography variant="h2" component="h2">
                            Alexander Grinevich
                        </Typography>
                        <Typography component="p" color="secondary">
                            Full Stack Web Developer
                        </Typography>
                    </Grid>    
                    <Grid item key={uuid()}>
                        <Button href="#resume">
                            <PlayCircleOutlineIcon className={classes.arrow} />
                        </Button>
                        
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        
    )
}

export default Hero;