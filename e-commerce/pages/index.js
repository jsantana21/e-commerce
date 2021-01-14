import Layout from '../components/Layout';
import getCommerce from '../utils/commerce'
import { Alert } from '@material-ui/lab';
import { Grid, Box, Card, CardActionArea, CardContent, CardMedia, Slide, Typography } from '@material-ui/core';
import Link  from 'next/link';

export default function Home(props) {
  const { products } = props;
  return (
    <Layout title = "Home" commercePublicKey ={props.commercePublicKey}>
      { products.length === 0 && <Alert>No available products...</Alert> }
      <Grid container spacing = {1}>
      {products.map((product) => (
        <Grid item md={3}>
          <Slide key={product.id} direction="up" in={true}>
            <Grid item md={15}>
              <Card>
                <Link href={`/products/${product.permalink}`}>
                  <CardActionArea>
                    <CardMedia component="img" alt={product.name} image={product.media.source} />
                    <CardContent>
                      <Typography gutterBottom variant="body2" color="textPrimary" component="p">
                        {product.name}
                      </Typography>
                      <Box>
                        <Typography variant="body1" color="textPrimary" component="p">
                          {product.price.formatted_with_symbol}
                        </Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
          </Slide>
        </Grid>

        ))}
      </Grid>

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
