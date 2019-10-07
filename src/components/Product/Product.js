import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Container} from "@material-ui/core"
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    card: {
      height: '100%',
      border: 0,
      borderRadius: 0,
      boxShadow: 0,
      cursor: 'pointer',
      transitionDuration: '1s',
      filter: "sepia(80%)",
      padding: 0,
      "&:hover": {
          filter: 'sepia(0%)'
      }

    },
    media: {
      height: '100%',
      boxShadow: 0,
    },
  });

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
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {props.product.fields.productName}
                        </Typography>
                        <Typography component="p">
                            {props.product.fields.productDescription}
                        </Typography>
                    </CardContent>
                </Container>
            ) : null}
        </>
    )   
}

export default Product;