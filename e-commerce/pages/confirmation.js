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
import Router from 'next/router';
import { CircularProgress } from '@material-ui/core';


function Confirmation(props) {
  const classes = useStyles();
  const { state, dispatch} = useContext(Store);
  const { order } = state;

  
  return (
    <Layout title = "Confirmation" commercePublicKey ={props.commercePublicKey}>
       
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(Confirmation), { 
    ssr: false, 
  });
