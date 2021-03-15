$(document).ready(function () {
            $("button").click(function () {
                $("#HeroInfo").load("./data/info.json", function(responseText){
                  var heros = JSON.parse(responseText);
                  $("#HeroInfo").html("Date: " + history.date + "<br>Description: " + history.description + "<br>Language: " + history.lang + "<br>Categories:<br>" + history.categories[0] + "<br>" + history.categories[1]);


                });
            });
        });
