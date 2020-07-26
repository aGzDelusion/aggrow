function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//to prevent any jQuery code from running before the document is finished loading

$(document).ready(function() {


            function weather() {
                var URL = 'api.openweathermap.org/data/2.5/weather?q=London&appid=1ebcc78ddc0e6cd3f4400c4dfa13a255';
                $.getJSON(URL, function(data) {
                    console.log(data);
                    updateDOM(data);
                });

                weather();

                function updateDOM(data) {
                    var city = data.name;
                    var temp = data.main.temp;
                    var icon = data.weather[0].icon;
                    var description = data.weather[0].description;
                    $('#city').html(city);
                    $('#icon').attr('src', icon);
                    $('#temp').html(temp);
                    $('$description').html(description);
                }

            });