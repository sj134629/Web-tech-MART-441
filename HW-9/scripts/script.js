let history =   {
    "date": "-300",
    "description": "Pilgrims travel to the healing temples of Asclepieion to be cured of their ills. After a ritual purification the followers bring offerings or sacrifices.",
    "lang": "en",
  },
  "categories" : [
    "By place",
    "Greece"
  ]
},

  {
    "date": "-300",
    "description": "Pyrrhus, the King of Epirus, is taken as a hostage to Egypt after the Battle of Ipsus and makes a diplomatic marriage with the princess Antigone, daughter of Ptolemy and Berenice.",
    "lang": "en",
  },
    "categories" : [
       "By place",
        "Egypt"
      ]
},
{
  "date": "-300",
  "description": "Ptolemy concludes an alliance with King Lysimachus of Thrace and gives him his daughter Arsinoe II in marriage.",
  "lang": "en",
},
  "categories" : [
     "By place",
     "Egypt"
    ]
}

$(function () {
            $("button").click(function () {
                HeroInfo();
            });

        });

function HeroInfo()
{
  $("#HeroInfo").html("Date: " + history.date + "<br>Description: " + history.description + "<br>Language: " + history.lang + "<br>Categories:<br>" + history.categories[0] + "<br>" + history.categories[1]);
}
