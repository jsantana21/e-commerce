import '../styles/globals.css'
import { StoreProvider } from '../components/Store';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


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