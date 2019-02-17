const request = require('request-promise');
//const request = require('request');
const cheerio = require('cheerio');
//retourne la liste des pages michelin
//const liste_des_url_m = require ('./liste_des_url_m');
{
	//if(!error && response.statusCode==200)
	{
        //console.log(html);
	
	 url_restos_michelin =[];
	var nom_des_chefs_michelin =[];
    var URL=[];
    console.log("liste des pages url");
	for(var i=1;i<36;i++){
        url_restos_michelin.push('https://restaurant.michelin.fr/restaurants/france/restaurants-michelin/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-'+i+'?indirect=278');
        console.log(i);
        
    }
    console.log(url_restos_michelin);
    //jusque la ca fonctionne :)
	/*Url = async function Url (){
        for(var i=0;i<url_restos_michelin.length;i++)
	{
        console.log ('bug?')
		request(url_restos_michelin[i],(error,response,body)=>
		{
            console.log('buuuuug');
        var $ = cheerio.load(body);
		var url = $('.poi-card-link').each(function(){
		end = ($(this).attr('href'));
		URL.push("https://restaurant.michelin.fr"+end);
          });})
    }
    console.log('ici');
    Url;
    console.log(URL);
    } 
    
	for(var i=0;i<URL.length;i++)
	{
		request(URL[i],(error,response,body)=>
	{
		var $ = cheerio.load(body);
		var chef = $('.field--name-field-chef').find('div').children().text().trim();
		nom_des_chefs_michelin.push(chef);
		console.log(chef);
	})};
	*/
/*
	for(var i=1;i<36;i++){
		request('https://restaurant.michelin.fr/restaurants/france/restaurants-michelin/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-"+i+"?indirect=278',(error,response,body)=>
	}
	$("#panels-content-main-leftwrapper").each(function(i)
	{
	$(this).find("li").each(function(j)
	{ 
		$(this).find("div.poi_card-display-title").each(function(k)
		{
		if(k==0)
		{
		    tableau.push($(this).filter("div.poi_card-display-title").text().trim());
			console.log($(this).filter("div.poi_card-display-title").text().trim());
		}
		}
		)
    }
	)
    })*/
}
console.log('fini');
return url_restos_michelin;
}
;