import fetch from 'node-fetch';

const baseURL = 'https://airportgap.dev-tester.com/api';
export function clientGet (url, options) {
    return fetch(baseURL + url, options)
}

export function clientGetAuth (url) {
    const options = { method: 'GET', 
    headers: {'Content-Type': 'application/json',
    'Authorization': 'Bearer oeMbfr5Xdo4WvJbEv49sxttX'}}
    return fetch(baseURL + url, options)
}

export function clientPost (url, outBody) {
    const options = { method: 'POST', 
    headers: {'Content-Type': 'application/json'},   
    body: JSON.stringify(outBody) }
    return fetch(baseURL + url, options)
}

export function clientPostAuth (url, outBody) {
    const options = { method: 'POST', 
    headers: {'Content-Type': 'application/json',
    'Authorization': 'Bearer oeMbfr5Xdo4WvJbEv49sxttX'},   
    body: JSON.stringify(outBody) }
    return fetch(baseURL + url, options)
}

export function clientPatchAuth (url, outBody) {
    const options = { method: 'PATCH', 
    headers: {'Content-Type': 'application/json',
    'Authorization': 'Bearer oeMbfr5Xdo4WvJbEv49sxttX'},   
    body: JSON.stringify(outBody) }
    return fetch(baseURL + url, options)
}

export function clientDeletehAuth (url) {
    const options = { method: 'DELETE', 
    headers: {'Content-Type': 'application/json',
    'Authorization': 'Bearer oeMbfr5Xdo4WvJbEv49sxttX'},   
    body: null }
    return fetch(baseURL + url, options)
}

