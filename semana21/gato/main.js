function __main__() {
    var settings = {
        "async": true,
        "type": "GET",
        "url": "https://api.thecatapi.com/v1/images/search",
    };

    $.ajax(settings).done(function(response) {
        console.log(response);
        respuestaimagen = response[0].url;
        document.getElementById("imagen").src = respuestaimagen;
    });
    var settings2 = {
        "async": true,
        "type": "GET",
        "x-api-key": "clave api",
        "url": "https://api.thecatapi.com/v1/breeds/search?q=Sib",
    };
    $.ajax(settings2).done(function(response) {
        console.log(response);
        document.getElementById("race").textContent = response[0].name;
        document.getElementById("description").textContent = response[0].description;
        document.getElementById("temperament").textContent = response[0].temperament;
        document.getElementById("imagen2").textContent = response[0].url;

    });
}
__main__();