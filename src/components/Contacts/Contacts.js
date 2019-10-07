import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import {SocialIcon} from 'react-social-icons'
import {Mail} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    root: {
        background: "url(https://image.freepik.com/free-photo/empty-red-brick-wall_53876-31790.jpg) no-repeat",
        backgroundSize: 'cover'
        },
    grid: {
        minHeight: "100vh",
        width: '100%',
        paddingTop: theme.mixins.toolbar.minHeight,
        background: 'rgba(0,0,0,0.8)'
    },
    headline: {
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 100,
        color: 'lightpink',
        textShadow: "0 0 10px pink, 0 0 20px orangered, 0 0 40px red, 0 0 80px magenta"

    },
    icon: {
        height: 70,
        width: 70,
        color: "#FFFFFF"

    },
    avatar: {
        height: 100,
        width: 100,
        margin: 'auto'
    },
    method: {
        padding: '1em 0',
        textAlign: 'center'
    }

}))

const Contacts = () => {
    const classes = useStyles();
    return (
        <div id="contacts" className={classes.root}>
            <Grid container 
                direction="row" 
                justify="space-around" 
                alignContent="space-around" 
                alignItems="center" 
                className={classes.grid}
            >
            <Grid item xs={12}>
                <Typography variant="h3" color="primary" className={classes.headline} >Get in touch</Typography>
            </Grid>
            <Grid item>
                <Avatar className={classes.avatar}>
                    <SocialIcon url="http://github.com/grinyahoo" style={{height: 100, width:100}} />
                </Avatar>
                <Typography variant="h5" color="secondary" component="p" className={classes.method}>Github</Typography>
                <Typography variant="body2" color="secondary" component="p" className={classes.method}>@grinyahoo</Typography>
            </Grid>
            <Grid item>
                <Avatar className={classes.avatar}>
                <Mail className={classes.icon} style={{color: 'black'}} />
                
                </Avatar>
                <Typography variant="h5" color="secondary" component="p" className={classes.method}>E-mail</Typography>
                <Typography variant="body2" color="secondary" component="p" className={classes.method}>agrinevich@protonmail.com</Typography>
            </Grid>
            <Grid item>
                <Avatar className={classes.avatar}>
                    <SocialIcon network="linkedin" url="https://www.linkedin.com/in/a-grinevich/" style={{height: 100, width:100}}/>
                </Avatar>
                <Typography variant="h5" color="secondary" component="p" className={classes.method}>LinkedIn</Typography>
                <Typography variant="body2" color="secondary" component="p" className={classes.method}>a-grinevich</Typography>
            </Grid>
            
        </Grid>
        </div>
    )
}

export default Contacts;