import React from 'react';
import Layout from '../components/Layout';
import getCommerce from '../utils/commerce'
import { Alert } from '@material-ui/lab';
import { Grid, Card, Slide, Select, Typography } from '@material-ui/core';
import Link  from 'next/link';
import { useStyles } from '../utils/styles';
import { useContext } from 'react';
import { Store } from '../components/Store';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import dynamic from 'next/dynamic';
import { CART_RETRIEVE_SUCCESS } from '../utils/constants';
import { Router } from 'next/router';
import { CircularProgress } from '@material-ui/core';


function Cart(props) {
  const classes = useStyles();
  const { state, dispatch} = useContext(Store);
  const { cart } = state;

  const removeFromCartHandler = async (lineItem) => {
    const commerce = getCommerce(props.commercePublicKey);
    const cartData = await commerce.cart.remove(lineItem.id);
    dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData.cart });
  };
  
  const quantityChangeHandler = async (lineItem, quantity) => {
    const commerce = getCommerce(props.commercePublicKey);
    const cartData = await commerce.cart.update(lineItem.id, {
      quantity,
    });
    dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData.cart });
  };

  const proccessToCheckoutHandler = () => {
    Router.push('/checkout');
  };

  return (
    <Layout title = "Cart" commercePublicKey ={props.commercePublicKey}>
        {cart.loading ? (
            <CircularProgress/>
        ): cart.data.line_items.length === 0 ? (
            <Alert icon={false} severity="error">
                Your Shopping Cart is empty! <Link href="/"> Go shop to fill up the Cart!</Link>
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
                                            <TableCell align="right">Remove</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {cart.data.line_items.map((cartItem) =>(
                                            <TableRow key={cartItem.name}>
                                                <TableCell component="th" scope="row">
                                                    {cartItem.name}
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Select
                                                    labelId="quanitity-label"
                                                    id="quanitity"
                                                    onChange={(e) =>
                                                    quantityChangeHandler(
                                                        cartItem,
                                                        e.target.value
                                                        )
                                                    }
                                                    value={cartItem.quantity}
                                                    >
                                                        {[...Array(10).keys()].map((x) => (
                                                            <MenuItem key={x+1} value={x+1}>
                                                                {x+1}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>

                                                </TableCell>
                                                <TableCell align="right">
                                                    {cartItem.price.formatted_with_symbol}
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Button
                                                    onClick={() => removeFromCartHandler(cartItem)}
                                                    variant="contained"
                                                    color="secondary">
                                                        x
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <Card className={classes.card}>
                                <List>
                                    <ListItem>
                                        <Grid container>
                                            <Typography variant="h6">
                                                Subtotal: {cart.data.subtotal.formatted_with_symbol}
                                            </Typography>
                                        </Grid>
                                    </ListItem>
                                    <ListItem>
                                        {cart.data.total_items > 0 && (
                                        <Button
                                        type="button"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        onClick={proccessToCheckoutHandler}>
                                            Checkout
                                        </Button>
                                        )}
                                    </ListItem>
                                </List>
                            </Card>
                        </Grid>
                    </Grid>
                </Slide>
            </React.Fragment>
        )}
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(Cart), { //NextJS function
    ssr: false, //render only on client-side not back-end
  });
