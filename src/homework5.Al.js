
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
const airport_idValue = ['MAG', 'HGU', 'LAE', 'POM', 'WWK', 'UAK', 'HFN', 'PFJ', 'YCB']
export const randomAirportID = (airport_idValue) => {
    for (let i = 0; i < 2; i++) {
        const random = airport_idValue[Math.floor(Math.random() * airport_idValue.length)];
        return random
    }
};
