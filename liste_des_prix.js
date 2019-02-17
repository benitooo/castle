const request_promise = require('request-promise');
const cheerio = require('cheerio');
const prix = require('./prix');

exports.prix = async function prix (liste_URL){


  var liste_prix=[];
    for(var i=0;i<liste_URL.length;i++){
    var prix = await prix.Prix(liste_URL[i].urlHotel);
    var url = liste_URL[i].urlHotel;
    var chef = liste_URLL[i].chef;
    var nom = liste_URL[i].nom;
    if(prix!=0){
        liste_prix.push({nom,url,chef,prix});
    }

    }
  }

  return liste_prix;
}