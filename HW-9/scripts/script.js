$(document).ready(function() {
  $.fn.color = function(){
    this.css("margin", "100px");
    this.css("width", "50%");
    this.css("background-color", "red");
    this.css("border-radius", "15px");
    this.css("margin", "50px");

    this.css("text-align", "center");


  };
  $.fn.textStuff = function(){
    this.css("color", "white");
  };


  $("button").click(function () {


         $("#changeDiv").color();
         $("#changeText").textStuff();
  $.getJSON("./data/info.json", function(data){
    var heroData = '';
    $.each(data, function(key, value){
      heroData += '<tr>';
      heroData += '<td>'+value.name+'</td>';
      heroData += '<td>'+value.superheroName+'</td>';
      heroData += '<td>'+value.city+'</td>';
      heroData += '<td>'+value.strength+'</td>';
      heroData += '</tr>';


    });
    $('#heroesTable').append(heroData);
  });
});
});
