const API = 'https://rickandmortyapi.com/api/character/';

const fetchData = API =>  {
    return new Promise((resolve,reject) => {
        $.get(API,function(response){
            if(true){
                resolve(response);
            }else{
                reject(new Error('An Error ocurred!',API));
            }
        });
    })
}

fetchData(API)
    .then( result => {
        console.log(result.info.count);
        return fetchData(result.results[0].origin.url);
    })
    .then( result => {
        console.log(result.dimension);
        return fetchData(result.residents[0])
    })
    .then(result => console.log(result.name))
    .catch( error => console.log(error));

console.log('First!');