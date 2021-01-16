import React from 'react';
import Layout from '../components/Layout';
import getCommerce from '../utils/commerce'
import { Alert } from '@material-ui/lab';
import { Grid, Box, Card, CardActionArea, CardContent, CardMedia, Slide, Typography } from '@material-ui/core';
import Link  from 'next/link';
import { useStyles } from '../utils/styles';
import { useContext } from 'react';
import { Store } from '../components/Store';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';


export default function Cart(props) {
  const classes = useStyles();
  const { state, dispatch} = useContext(Store);
  const { products } = props;
  return (
    <Layout title = "Cart" commercePublicKey ={props.commercePublicKey}>
        {cart.loading ? (
            <CircularProgress/>
        ): cart.data.line_items.length === 0 ? (
            <Alert icon={false} severity="error">
                Empty Cart <Link href="/"> Go shop to fill up the Cart</Link>
            </Alert>
        ):(
            <React.Fragment>
                <Typography variant="h1" component="h1">
                    Shopping Cart 
                </Typography>
                <Slide direction="up" in={true}>
                    <Grid container spacing={1}>
                        <Grid item md={9}>
                            <TableContainer>
                                <Table aria-label="Orders">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell align="right">Quantity</TableCell>
                                            <TableCell align="right">Price</TableCell>
                                            <TableCell>Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </Slide>
            </React.Fragment>
        )}
    </Layout>
  );
}

export async function getStaticProps() {
  const commerce = getCommerce();
  const { data: products } = await commerce.products.list();
  return {
    props: {
      products,
    },
  };
}
