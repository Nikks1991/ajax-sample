var request = require('request');

import { HOST_URL, USERID } from './constants';

// Call GET method with specified url
export function get(url) {

    // Set the headers
    const headers = {
        userId: USERID
    };

    // Configure the request
    var options = {
        url,
        method: 'GET',
        headers
    };

    return new Promise((resolve, reject) => {
        request(options, (error, response, data) => {

            if (error) {
                reject(error);
            }

            resolve(data);
        });
    });
}

// Call POST method with specified url and body
export function post(url, body) {

    // Set the headers
    const headers = {
        'userId': USERID,
        'Content-Type': 'application/json'
    };

    // Configure the request
    var options = {
        url,
        method: 'POST',
        headers,
        form: body
    };

    return new Promise((resolve, reject) => {
        request(options, (error, response, data) => {

            if (error) {
                reject(error);
            }

            resolve(data);
        });
    });
}
