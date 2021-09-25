const https = require("https");

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

module.exports = fetchData;