const https = require("https");
const API = 'https://rickandmortyapi.com/api/character/';

const fetchData = (api) => {
    return new Promise((resolve, reject) => {
        https.get(api, result => {
            result.setEncoding('utf8');
            if(result.statusCode === 200) {
                let body = '';
                result.on('data', (data) => {
                    body += data;
                });
                result.on('end', () => {
                    resolve(JSON.parse(body));
                });
            } else reject(new Error(`REQUEST ERROR ON ${api}. Status ${result.statusCode}`));
        });
    });
}

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