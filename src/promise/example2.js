const fetchData = require('../../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
    .then( response  => {
        console.log(response.info.count);
        return fetchData(`${API}${response.results[0].id}`);
    })
    .then( result => {
        console.log(result.name);
        return fetchData(`${result.origin.url}`);
    })
    .then( result => {
        console.log(result.dimension);
    })
    .catch(error => console.log(error));

console.log('First!');