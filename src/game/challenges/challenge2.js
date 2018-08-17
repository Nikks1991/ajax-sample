
import { fetchProducts, postProductCount } from './challenges-api';

import { activeProducts, productCount } from './common';

export function startChallenge2() {

    return fetchProducts()
        .then((products) => postProductCount(productCount(products.filter(activeProducts))))
        .then((response) => console.log('Response', response))
        .catch(error => console.log('Error:', error));
}
