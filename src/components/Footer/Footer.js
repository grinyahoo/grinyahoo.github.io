import React from 'react'
import {AppBar, Box, Button, Grid, Toolbar, Typography} from '@material-ui/core' 
import {makeStyles} from '@material-ui/core/styles'
import {Copyright} from '@material-ui/icons'
import {SocialIcon} from 'react-social-icons'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.primary.contrastText,
        padding: '2em',
        textAlign: 'center'
    },
    copyrightBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '0.5em',
        justifyContent: 'center'
    },
    copyrightIcon: {
        marginRight: '.5em',
    },
    SocialIcon: {
        height: 30,
        width: 30,
        margin: '0.5em'
    }

}))

const Footer = () => {
    const classes = useStyles()
    return (
        <Box position="relative" className={classes.root}>
            <Grid container justify="space-between">
                <Grid item xs={12} sm={5}>
                    <SocialIcon url="http://github.com/grinyahoo" className={classes.SocialIcon} />
                    <SocialIcon network="linkedin" url="https://www.linkedin.com/in/a-grinevich/" className={classes.SocialIcon} />
                </Grid>
                <Grid item xs={12} sm={5} className={classes.copyrightBox}>
                    <Copyright className={classes.copyrightIcon} />
                    <Typography variant="body1" display="inline">
                        2019 Alexander Grinevich.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer;