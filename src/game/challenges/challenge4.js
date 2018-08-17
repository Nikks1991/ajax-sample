
import { fetchProducts, postProductTotalPrice } from './challenges-api';

import { activeProducts, productsTotalPrice } from './common';

export function startChallenge4() {

    return fetchProducts()
        .then((products) => postProductTotalPrice(productsTotalPrice(products.filter(activeProducts))))
        .then((response) => console.log('Response', response))
        .catch(error => console.log('Error:', error));
}
