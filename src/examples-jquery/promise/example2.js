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

        const character = await fetchData(`${API}${data.results[0].id}`);
        console.log(character.name);

        const origin = await fetchData(character.origin.url);
        console.log(origin.dimension);
    }catch(error){
        console.log(error);
    }
}

console.log('Before!');
exampleAsync(API);