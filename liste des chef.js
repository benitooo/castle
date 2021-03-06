const request_promise = require('request_promise');
const cheerio = require('cheerio');

exports.chef = async function chef (url){
  const option = {
    uri: url,
    transform: function (body){
      return cheerio.load(body);
    }
  };
  let chef;
  try{
    let $ = await request_promise(option);
    nom_chef = $('.field--name-field-chef').find('div').children().text().trim();
  }
  catch(error){
    console.log(error);
  }

  return nom_chef;
}