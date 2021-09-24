$(document).ready(function() {
    $.get('https://rickandmortyapi.com/api/character/', data => {
        console.log(data);
        $.get(data.results[0].origin.url, data => {
            console.log(data);
            $.get(data.residents[0], data => {
                console.log(data);
            });
        });
    });
});