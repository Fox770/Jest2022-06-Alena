
/** Fetch description of Authorization
 * @param {method} = get
 * @param {headers} = headers
 */
 export const getMethodHeaders =  {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer oeMbfr5Xdo4WvJbEv49sxttX',
        'Content-Type': 'application/json'
    }
};

/** Random function of airport_id values
 * @param {string} = airport_id Value
 */

export const randomAirportID = (airportIdValue) => {
    for (let i = 0; i < 2; i++) {
        const random = airportIdValue[Math.floor(Math.random() * airportIdValue.length)];
        return random
    }
};