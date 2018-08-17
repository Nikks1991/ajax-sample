
import { fetchProducts, postProductCount } from './challenges-api';

import { productCount } from './common';

export function startChallenge1() {

    return fetchProducts()
        .then((products) => postProductCount(productCount(products)))
        .then((response) => console.log('Response', response))
        .catch(error => console.log('Error:', error));
}
