$(document).ready(function() {
    $("button").click(function() {
        getMovie();
    });
});

function getMovie() {
    var url = "http://www.omdbapi.com/?t=";
    url += $("input").val();
    $.get(url)
        .then(function(data) {
            console.log(data);
            updatePage(data.Title, data.Poster);
            showMessage();
        })
        .catch(function(error) {
            console.log(error);
        });
}

function updatePage(title, poster) {
    $("body").append(title);
    $("body").append('<img src="' + poster + '">');
}

function showMessage() {
    $("body").append("Cool Movie!");
}
