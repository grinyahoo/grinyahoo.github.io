import React from 'react'
import {AppBar, Box, Button, Grid, Toolbar, Typography} from '@material-ui/core' 
import {makeStyles} from '@material-ui/core/styles'
import {Copyright} from '@material-ui/icons'
import {SocialIcon} from 'react-social-icons'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.common.black,
        padding: '2em'
    },
    copyrightBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    copyrightIcon: {
        marginRight: '.5em',
    },
    SocialIcon: {
        height: 30,
        width: 30,
        marginLeft: '1em'
    }

}))

const Footer = () => {
    const classes = useStyles()
    return (
        <AppBar position="relative" className={classes.root}>
            <Grid container justify="space-between">
                <Grid item className={classes.copyrightBox}>
                    
                        <Copyright className={classes.copyrightIcon} />
                        <Typography variant="button" display="inline">
                            2019 Alexander Grinevich.
                        </Typography>
                    
                </Grid>
                <Grid item>
                    <SocialIcon url="http://github.com/grinyahoo" className={classes.SocialIcon} />
                    <SocialIcon network="linkedin" url="https://www.linkedin.com/in/a-grinevich/" className={classes.SocialIcon} />
                </Grid>
            </Grid>
        </AppBar>
    )
}

export default Footer;