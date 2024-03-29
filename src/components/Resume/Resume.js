import React from 'react'
import uuid from 'react-uuid'
import {Grid, Container, Typography, Link, List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'
import {WorkOutlineRounded} from '@material-ui/icons'
import {makeStyles} from '@material-ui/core/styles'


const skills = [
    "HTML5, XML, ",
    "CSS3, LESS, BEM, ",
    "JavaScript, ",
    "Python, PHP, ",
    "Django, Flask, ",
    "NodeJS, Express, ",
    "React, ",
    "jQuery, ",
    "Bootstrap ",
    "React-bootstrap, ",
    "Materialize, ",
    "Material-UI, ",
    "MySQL, ",
    "MongoDB, ",
    "AWS, ",
    "Docker, ",
    "Agile, Jira, ",
    "Git, Heroku ",
]

const experience = [
    {
        company: "GMI Ltd",
        position: "Full Stack Engineer",
        timeframe: "Apr 2017 - Feb 2019",
        highlights: [
            "Developed b2b platform for rental businesses (PHP, JavaScript, MySQL, Custom proprietary framework, Social media APIs, OAuth,  Electronic Payments System).",
            "Implemented optimized search algorithm for autoparts marketplace (PHP, CMS MODx, SQL, TecDoc Database).",
            "Supported legacy selling website (PHP, CMS Drupal, JavaScript, jQuery , MySQL, Electronic Payments System)."
        ],
        links: ['']
    },
    {
        company: "Code for Boston",
        position: "Front-end Engineer",
        timeframe: "May 2019 - present",
        highlights: [
            "Working in a fast paced agile environment developing open source web application focused on enhancing refugees integration experience. As frontend engineer I design and implement new features, fix bugs.", 
        ],
        links: ["https://github.com/codeforboston/migrant_service_map"]
    }
]


const useStyles = makeStyles(theme => ({
    root: {
        paddingBottom: "1em",
        backgroundColor: theme.palette.background.default,
        paddingTop: 64,
    },
    
}))

const Resume = () => {
    const classes = useStyles()
    return(
        <Container id="resume" className={classes.root}>
            <Grid container
                direction="column"
            >
                
                <Grid item style={{paddingBottom: '1em'}}>
                    
                    <Typography variant='button' component="div">
                        RESUME / <Link href="/Alexander_Grinevich_resume.pdf">DOWNLOADABLE PDF</Link> 
                    </Typography>
                </Grid>
                <Grid item style={{paddingBottom: '1em'}}>
                    
                        <Grid container direction="row" justify="center" alignItems="flex-start" >
                            <Grid item xs={12} sm={3} lg={2} style={{paddingBottom: '1em'}} >
                                <Typography variant="h6" component="p" color="primary" >
                                SKILLS
                                </Typography>
                                <Typography component="div" color="secondary">  
                                    <Grid container>
                                    {skills.map(skill => 
                                        <Grid item sm={12} key={uuid()}>
                                            <Typography variant="body2">
                                                {skill}
                                            </Typography>
                                        </Grid>)}
                                    </Grid>      
                                
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={9} lg={6} style={{paddingBottom: '1em'}} >
                                <Typography variant="h6" component='p' color="primary" >
                                EXPERIENCE
                                </Typography>
                                <Typography component="div">
                                    <List>
                                        {experience.map(expa => 
                                        <React.Fragment key={uuid()}>
                                            <ListItem key={uuid()}>
                                                <ListItemIcon><WorkOutlineRounded /></ListItemIcon>
                                                <ListItemText primary={[expa.position, expa.company].join(', ')} 
                                                    secondary={expa.timeframe} 
                                                    />
                                            </ListItem>
                                            {expa.highlights.map(hl => 
                                                <Typography variant="body2" 
                                                    component='div'
                                                    key={uuid()}
                                                >
                                                {hl}
                                                </Typography>
                                            )}
                                            <Typography variant="body2">{expa.links.join(', ')}</Typography>
                                        </React.Fragment>
                                        )}
                                    </List>
                                </Typography>

                            </Grid>
                        </Grid>
                    
                    
                </Grid>
            </Grid>
        </Container>
        
    )
}

export default Resume;