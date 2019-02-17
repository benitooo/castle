const request_promise = require('request-promise');
const cheerio = require('cheerio');
const liste_chef_michelin = require('./liste_chef_michelin');
//retourne la liste des url de chaque restaurant michelin étoilé

var URL = [];

exports.req_url = async function req_url (url){
  const option = {
      uri: url,transform: function (body){
      return cheerio.load(body);
    }
  };
  var eo_url;
 
  try{
    let $ = await request_promise(option);
    var container = $('.poi-card-link').each(function(){
      eo_url = ($(this).attr('href'));
      URL.push("https://restaurant.michelin.fr"+eo_url);
      
    });
    console.log(URL);
    return URL;
  }
  catch(error){
    console.log(error);
  }

}