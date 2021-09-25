$(document).ready(function() {
    $.get('https://rickandmortyapi.com/api/character/', data => {
        console.log(data.info.count);
        $.get(data.results[0].origin.url, data => {
            console.log(data.dimension);
            $.get(data.residents[0], data => {
                console.log(data.name);
            });
        });
    });
});