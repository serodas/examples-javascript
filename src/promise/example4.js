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

const exampleAsync = async(API) => {
    const data = await fetchData(API);
    console.log(data.info.count);

    const character = await fetchData((data.results[0].origin.url));
    console.log(character.dimension);

    const resident = await fetchData(character.residents[0]);
    console.log(resident.name);
}

console.log('Before!');
exampleAsync(API);