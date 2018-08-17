import { fetchProducts, postProductCategoryCount } from './challenges-api';

import { activeProducts, activeProductsByCategory } from './common';

export function startChallenge3() {

    return fetchProducts()
        .then((products) => postProductCategoryCount(activeProductsByCategory(products.filter(activeProducts))))
        .then((response) => console.log('Response', response))
        .catch(error => console.log('Error:', error));
}
