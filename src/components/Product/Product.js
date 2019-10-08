import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Button, Container, CardContent, CardMedia, Typography} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    card: {
      height: '100%',
      border: 0,
      borderRadius: 0,
      boxShadow: 0,
      cursor: 'pointer',
      overflow: 'hidden',
      transitionDuration: '1s',
      filter: "sepia(20%)",
      padding: 0,
      "&:hover": {
          filter: 'sepia(0%)'
      }

    },
    media: {
      height: '100%',
      boxShadow: 0,
      backgroundSize: 'cover'
    },
    content: {
        position: 'absolute',
        top: 0,
        width: 'calc(100% - 2em)',
        height: 'calc(100% - 2em)',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(63, 81, 181, 0.8)',
        color: theme.palette.primary.contrastText,
        padding: '1em',
        justifyContent: 'space-around',
        textAlign: 'center',
        transitionDuration: '0.8s',
        opacity: 0,
        "&:hover": {
            opacity: 1
        }
    },
    seeItLive: {
        backgroundColor: theme.palette.primary.contrastText,
        color: theme.palette.secondary.dark,
        "&:hover": {
            backgroundColor: theme.palette.grey[200],
        }
    }
  }));

const Product = (props) => {

    const classes = useStyles();

    return (
        <>
            {props.product ? (
                <Container className={classes.card} >
                    <CardMedia
                        image={props.product.fields.image[0].fields.file.url}
                        title={props.product.fields.productName}
                        className={classes.media}
                    />
                    <CardContent className={classes.content}>
                        <Typography gutterBottom
                            variant="h5"
                            component="h2"
                        >
                            {props.product.fields.productName}
                        </Typography>
                        <Typography component="p">
                            {props.product.fields.productDescription}
                        </Typography>
                        <Button color="primary" 
                            href={props.product.fields.website} 
                            className={classes.seeItLive}
                        >
                            See it live
                        </Button>
                    </CardContent>
                </Container>
            ) : null}
        </>
    )   
}

export default Product;