import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product';

const products = [
    {id: 1, name: "50A Cord Reel", description: '50 Amp Cord Reel', price: '$3,500' },
    {id: 2, name: "Cable Storage Barrel", description: '50 Amp Cord Barrel', price: '$3,500' },
    {id: 3, name: "Unit Dolly", description: 'Dolly to move the product', price: '$3,500' },
];


const Products = () => {
    return (
        <main>
       <Grid container justify="center" spacing={4}>
           {products.map((product)=>(
               <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                   <Product product={product} />
               </Grid>
           ))}
       </Grid>
    </main>
    )
}

export default Products;