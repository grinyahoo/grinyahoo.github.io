import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Product from '../Product/'
import {Search} from '@material-ui/icons'

import * as contentful from 'contentful'
import { Typography } from '@material-ui/core'
// import { recomposeColor } from '@material-ui/core/styles'

const SPACE_ID = 'm4kbluxcylua'
const ACCESS_TOKEN = '2yVsShir-bF4BVXN34yEtS-gcmTNwCO8U-XLLu53StE'

const client  = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
        paddingTop: theme.mixins.toolbar.minHeight,
        justifyItems: 'center',
        alignItems: 'center'
    },
    noResults: {
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 24,
        textAlign: 'center'
    },
    icon: {
        width: 24,
        height:24
    }
}))

class ProductList extends React.Component {

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
            <ProductListDummy products={this.state.products} 
                onSearchInputChange={this.onSearchInputChange} />
        )
    }
}

const ProductListDummy = (props) => {
    const {products} = props
    const classes = useStyles()
    return (
        <div id="work" className={classes.root}>
            
            
                <TextField style={{padding:24}} 
                    id="searchInput"
                    placeholder="Search"
                    margin="normal"
                    onChange={props.onSearchInputChange}
                />
                {products.length ? (
                <Grid container spacing={0}>
                    {products.map(c_product => (
                        <Grid item xs={12} sm={6} lg={4}>
                            <Product product={c_product} />
                        </Grid>
                    ))}

                </Grid>
            ) : <Container className={classes.noResults}>
                    <Typography variant="body" 
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

export default ProductList;