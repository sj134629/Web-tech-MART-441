$(document).ready(function() {
  $("button").click(function () {
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
