import { HOST_URL } from '../../util/constants';
import { get, post } from '../../util/fetch';

// Fetches the next availabel challenge
export function fetchChallenge() {
    const url = `${HOST_URL}/challenge`;

    return get(url)
        .then((challenge) => console.log('Chellenge', challenge))
        .catch(error => console.log('Error:', error));
}

// Fetches the list of products
export function fetchProducts() {
    const url = `${HOST_URL}/challenge/input`;

    return get(url)
        .then((products) => JSON.parse(products));
}

// Posts total product count
export function postProductCount(count) {

    const url = `${HOST_URL}/challenge/output`;

    const body = {
        count
    };

    return post(url, body);
}

// Posts product category with availabel total product in each category
export function postProductCategoryCount(categoryCount) {

    const url = `${HOST_URL}/challenge/output`;

    const body = categoryCount;

    return post(url, body);
}

// Post total price for all products
export function postProductTotalPrice(price) {

    const url = `${HOST_URL}/challenge/output`;

    const body = {
        totalValue: price
    };

    return post(url, body);
}
