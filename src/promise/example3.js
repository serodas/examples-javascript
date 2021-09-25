const fetchData = require('../../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const exampleAsync = async(api) => {
    try{
        const data = await fetchData(api);
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