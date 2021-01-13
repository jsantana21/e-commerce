import '../styles/globals.css'
import { StoreProvider } from '../components/Store';

function MyApp({ Component, pageProps }) {
  return;
  <StoreProvider>
    <Component {...pageProps} />
  </StoreProvider> 
}

export default MyApp

MyApp.getInitialProps = async () => {
  return {
    pageProps: {
      commercePublicKey:
    }
  }
}