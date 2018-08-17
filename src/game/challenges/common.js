import { dateInMilliseconds, futureDate, midnight } from '../../util/util';

// Return product length
export function productCount(products) {

    return products.length;
}

// Returns true if today is greater than equal to startDate and less than endDate or else returns false
export function isActive(today, startDate, endDate) {

      return today >= startDate && today < endDate;
}

// Return all the active product
export function activeProducts(product) {

    const today = new Date();
    const todayMidnight = dateInMilliseconds(midnight(today));
    const dateInFuture = dateInMilliseconds(futureDate(today));

    const startDate = dateInMilliseconds(product.startDate);

    const productEndDate = product.endDate;
    const endDate = productEndDate ? dateInMilliseconds(productEndDate) : dateInFuture;

    return isActive(todayMidnight, startDate, endDate);
}

// Return object with keys as product category with values as total product within category
export function activeProductsByCategory(products) {
    let activeProductsCategory = {};

    products.forEach((product) => {
        const category = product.category;
        const categoryCount = activeProductsCategory[category];

        if (!categoryCount) {
            activeProductsCategory[category] = 1;
        } else {
            activeProductsCategory[category] = categoryCount + 1;
        }
    });

    return activeProductsCategory;
}

// Returns total price for all products
export function productsTotalPrice(products) {
    let totalPrice = 0;

    products.forEach((product) => {
        const price = product.price;

        totalPrice += price;
    });

    return totalPrice;
}
