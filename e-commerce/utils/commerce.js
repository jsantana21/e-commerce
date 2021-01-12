import Commerce from '@chec/commerce.js';

let commerce = null;

function getCommerce(ecommercePublicKey){
    if (commerce) {
        return commerce;
    } else {
        const publicKey = ecommercePublicKey || process.env.ECOMMERCE_PUBLIC_KEY;
        const devEnvironment = process.env.NODE_ENV === 'development';
        if (devEnvironment && !publicKey){
            throw Error('Ecommerce public API key can NOT be found.');
        }
        commerce = new Commerce(publicKey, devEnvironment);
        return commerce;
    }
}

export default getCommerce;