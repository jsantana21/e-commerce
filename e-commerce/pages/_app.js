import '../styles/globals.css'
import { StoreProvider } from '../components/Store';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', () => NProgress.start());

function MyApp({ Component, pageProps }) {
  return(
  <StoreProvider>
    <Component {...pageProps} />
  </StoreProvider> 
  );
}

export default MyApp

MyApp.getInitialProps = async () => {
  return {
    pageProps: {
      commercePublicKey: process.env.ECOMMERCE_PUBLIC_KEY,
    },
  };
};