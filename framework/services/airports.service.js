import fetch from 'node-fetch';
import { baseURL, token } from '../config/urls.Al';

export function clientGet (url, options) {
    return fetch(baseURL + url, options)
}

export function clientGetAuth (url) {
    const options = { method: 'GET', 
    headers: {'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`}}
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
    'Authorization': `Bearer ${token}`},   
    body: JSON.stringify(outBody) }
    return fetch(baseURL + url, options)
}

export function clientPatchAuth (url, outBody) {
    const options = { method: 'PATCH', 
    headers: {'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`},   
    body: JSON.stringify(outBody) }
    return fetch(baseURL + url, options)
}

export function clientDeletehAuth (url) {
    const options = { method: 'DELETE', 
    headers: {'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`},   
    body: null }
    return fetch(baseURL + url, options)
}

