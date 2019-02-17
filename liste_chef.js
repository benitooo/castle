const request_promise = require('request-promise');
const cheerio = require('cheerio');
const chef_michelin = require('./chef_michelin');
const url_michelin = require('/url_michelin');

exports.URL = async function URL (url){
  const option = {
    uri: url,
    transform: function (body){
      return cheerio.load(body);
    }
  };
  
  var liste_URL = [];
  var listeChef=[];
  for(var i=0;i<36;i++){
      var url = await url_michelin.req_url(i);
      liste_URL.push(url);
  }
  try{
    

    for(var i=0;i<liste_URL.length;i++){
      var chef = await chef_michelin.chef(liste_URL[i]);
      listeChef.push(chef);
    }
  }
  catch(error){
    console.log(error);
  }

  return listeChef;
}