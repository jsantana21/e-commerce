import Head from 'next/head'
import styles from '../styles/Home.module.css'
import getCommerce from '../utils/commerce'

export default function Home(props) {
  const { products } = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        {products.map((product) => (
          <div key ={product.id}>
            <img src = {product.media.source} alt = {product.name}/>
            <p>{product.name}</p>
            <p>{product.price.formatted_with_symbol}</p>

          </div>
        ))}
     
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
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
