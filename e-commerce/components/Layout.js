import { ThemeProvider, CssBaseline, AppBar, Toolbar, Link, Container, Box, Typography } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import { theme, useStyles } from '../utils/styles';
import NextLink from 'next/link';


export default function Layout({
    children,
    commercePublicKey,
    title = 'E-Tron',
  }) {
      const classes = useStyles();
      return(
          <React.Fragment>
              <Head>
              <meta charSet="utf-8" />
              <title>{`${title} - E-Tron`}</title>
              <link rel="icon" href="/favicon.ico" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
              </Head>
              <ThemeProvider theme={theme}>
              <CssBaseline />
              <AppBar
                position="static"
                color="default"
                elevation={0}
                className={classes.appBar}
              >
                  <Toolbar className = {classes.toolbar}>
                      <Link 
                        variant = "h6"
                        color = "inherit"
                        noWrap
                        href= "/"
                        className = {classes.toolbarTitle}>
                            E-Tron
                      </Link>

                  </Toolbar>
              </AppBar>
              <Container component="main" className={classes.main}>
                {children}
              </Container>
              <Container maxWidth="md" component="footer">
                <Box mt={5}>
                    <Typography variant="body2" color="textSecondary" align="center">
                        {'© '}
                            E-Tron 2021
                        {'.'}
                    </Typography>
                </Box>
            </Container>
              </ThemeProvider>
          </React.Fragment>
      ) 
  }