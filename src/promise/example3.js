const API = 'https://rickandmortyapi.com/api/character/';

const fetchData = new Promise((resolve,reject) =>{
    $.get(API,function(response){
        resolve(response);
    });
});

fetchData.then( result => result)
    .then( result => {
        console.log(result.info.count);
        return $.get(result.results[0].origin.url, response => {
           response;
        });
    })
    .then( result => {
        console.log(result.dimension);
        return $.get(result.residents[0], response => {
            response;
         });
    })
    .then(result => console.log(result.name));