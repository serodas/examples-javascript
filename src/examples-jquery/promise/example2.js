const API = 'https://rickandmortyapi.com/api/character/';

const fetchData = API =>  {
    return new Promise((resolve,reject) => {
        $.get(API,function(response){
            resolve(response);
        })
        .fail(error => reject( new Error(error)));
    })
}

const exampleAsync = async(API) => {
    try{
        const data = await fetchData(API);
        console.log(data.info.count);

        const character = await fetchData((data.results[0].origin.url));
        console.log(character.dimension);

        const resident = await fetchData(character.residents[0]);
        console.log(resident.name);
    }catch(error){
        console.log(error);
    }
}

console.log('Before!');
exampleAsync(API);