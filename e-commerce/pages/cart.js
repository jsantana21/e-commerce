import React from 'react';
import Layout from '../components/Layout';
import getCommerce from '../utils/commerce'
import { Alert } from '@material-ui/lab';
import { Grid, Box, Card, CardActionArea, CardContent, CardMedia, Slide, Typography } from '@material-ui/core';
import Link  from 'next/link';
import { useStyles } from '../utils/styles';
import { useContext } from 'react';
import { Store } from '../components/Store';

export default function Cart(props) {
  const classes = useStyles();
  const { state, dispatch} = useContext(Store);
  const { products } = props;
  return (
    <Layout title = "Cart" commercePublicKey ={props.commercePublicKey}>

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
