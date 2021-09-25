const API = 'https://rickandmortyapi.com/api/character/';

const fetchData = API =>  {
    return new Promise((resolve,reject) => {
        $.get(API,function(response){
            resolve(response);
        })
        .fail(error => reject( new Error(error)));
    })
}

fetchData(API)
    .then( result => {
        console.log(result.info.count);
        return fetchData(`${API}${result.results[0].id}`);
    })
    .then( result => {
        console.log(result.name);
        return fetchData(result.origin.url)
    })
    .then(result => console.log(result.dimension))
    .catch( error => console.log(error));

console.log('First!');