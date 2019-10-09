import React from 'react'
import uuid from 'react-uuid'
import {makeStyles} from '@material-ui/core/styles'
import {Container, Grid, TextField, Typography} from '@material-ui/core'
import Product from '../Product/'
import * as contentful from 'contentful'
import {ReactComponent as NoResultsIcon} from './noResults.svg'

const SPACE_ID = 'm4kbluxcylua'
const ACCESS_TOKEN = '2yVsShir-bF4BVXN34yEtS-gcmTNwCO8U-XLLu53StE'

const client  = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.mixins.toolbar.minHeight,
        paddingBottom: '3em',
        paddingLeft: '0.5em',
        paddingRight: '0.5em',
        backgroundColor: theme.palette.background.default
    },
    noResults: {
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 24,
        textAlign: 'center'
    },
    icon: {
        width: 100,
        height: 100
    },
    product: {
        width: '60vh',
        height: '60vh'
    }
}))

class WorkList extends React.Component {

    constructor(props) {
        super(props);
        this.getProducts();
    }

    state = {
        products: [],
        searchString: ''
    }

    getProducts = () => {
        client.getEntries({
            content_type: 'product',
            query: this.state.searchString
        })
        .then((res) => {
            this.setState({products: res.items})
        })
        .catch((error) => {
            console.log("Error while fetching products");
            console.log(error);
        })
    }

    onSearchInputChange = (e) => {
        if (e.target.value) {
            this.setState({searchString: e.target.value})
        }
        else {
            this.setState({searchString: ''})
        }
        this.getProducts();
    }

    render() {
        return (
            <WorkListDummy products={this.state.products} 
                onSearchInputChange={this.onSearchInputChange} />
        )
    }
}

const WorkListDummy = (props) => {
    const {products} = props
    const classes = useStyles()
    return (
        <div id="work" className={classes.root}>
            
                <Typography variant="button" component="div" style={{padding: '0.5em 1em 1em 1em'}}>Recent work</Typography>
                {products.length ? (
                <Grid container spacing={0} justify="center">
                    {products.map(c_product => (
                        <Grid item className={classes.product} key={uuid()}>
                            <Product product={c_product} />
                        </Grid>
                    ))}

                </Grid>
            ) : <Container className={classes.noResults}>
                    <Typography component="p">
                        <NoResultsIcon className={classes.icon} />
                    </Typography>

                    <Typography variant="body1" 
                        gutterBottom={true} 
                        component="p"
                        color="textSecondary"
                    >
                        No results found for your query.
                    </Typography>
                </Container>
            }
        </div>
    )
}

export default WorkList;