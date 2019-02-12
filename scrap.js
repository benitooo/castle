const request = require('request');
const cherrio = require('cheerio');

request('https://www.relaischateaux.com/fr/destinations/europe/france',(error,response,html)=>{
    if(!error && response.statusCode==200){
        console.log(html);
    }
});