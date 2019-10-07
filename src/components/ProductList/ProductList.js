import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import Product from '../Product/'

import * as contentful from 'contentful'
// import { recomposeColor } from '@material-ui/core/styles'

const SPACE_ID = 'm4kbluxcylua'
const ACCESS_TOKEN = '2yVsShir-bF4BVXN34yEtS-gcmTNwCO8U-XLLu53StE'

const client  = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})

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
            <>
                {this.state.products ? (
                    <div>
                        <TextField style={{padding:24}} 
                            id="searchInput"
                            placeholder="Search"
                            margin="normal"
                            onChange={this.onSearchInputChange}
                        />
                        <Grid container spacing={24} style={{padding:24}}>
                            {this.state.products.map(c_product => (
                                <Grid item xs={12} sm={6} lg={4}>
                                    <Product product={c_product} />
                                </Grid>
                            ))}

                        </Grid>
                    </div>
                ) : 'No products found'}
            </>
        )
    }

}

export default ProductList;