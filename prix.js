const request_promise = require('request-promise');
const cheerio = require('cheerio');
//retourne le prix d'un restaurant
exports.Prix = async function Prix (url){
  const option = {
    uri: url,
    transform: function (body){
      return cheerio.load(body);
    }
  };
  var prix;
  try{
    var $ = await reques_promise(option);
    if(String($('.priceTag').children().children().first().attr("class")) != "priceLabel"){
      prix = $('.price').text();
    }
    else{
      prix=0;
    }
  }
  catch(error){
    console.log(error);
  }
  return prix;
}