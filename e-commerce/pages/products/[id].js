import Layout from '../components/Layout';
import getCommerce from '../utils/commerce'
import { Alert } from '@material-ui/lab';
import { Grid, Box, Card, CardActionArea, CardContent, CardMedia, Slide, Typography } from '@material-ui/core';
import Link  from 'next/link';
import { ListItem } from '@material-ui/core';

export default function Product(props) {
  const { product } = props;
  return (
    <Layout title = "Home" commercePublicKey ={props.commercePublicKey}>
        <Slide direction = "up" in = {true}>
        <Grid container spacing ={1}>
            <Grid item md = {6}>
                <img src = {product.media.source} alt = {product.name} className = {classes.largeImage}/>
            </Grid>
            <Grid item md={3} xs={12}>
            <List>
              <ListItem>
                <Typography gutterBottom variant="h6" color="textPrimary" component="h1">
                  {product.name}
                </Typography>
              </ListItem>
              <ListItem>
                <Box dangerouslySetInnerHTML={{ __html: product.description }}> </Box>
              </ListItem>
            </List>
          </Grid>
          <Gird item md = {3} xs ={12}> 
          <Card>
              <List>
                  <ListItem>
                      <Grid container>
                          <Grid item xs={6}> Price </Grid>
                          <Grid item xs={6}> {product.price.formatted_with_symbol} </Grid>
                      </Grid>
                  </ListItem>
                  <ListItem>
                  <Grid alignItems="center" container>
                    <Grid item xs={6}> Status </Grid>
                    <Grid item xs={6}> {product.quantity > 0 ? (<Alert icon={false} severity="success"> In Stock </Alert> ) 
                    : ( <Alert icon={false} severity="error"> Out of Stock </Alert> )}
                    </Grid>
                  </Grid>
                </ListItem>
                
              </List>
          </Card>
          </Gird>
        </Grid>

        </Slide>

    </Layout>
  );
}

export async function getStaticProps({params}) {
  const { id } = params;
  const commerce = getCommerce();
  const product = await commerce.products.retrieve(id, { type: 'permalink', });
  return { props: { product, } , };
}
