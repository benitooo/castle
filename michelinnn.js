const request = require('request');
const cheerio = require('cheerio');
request('https://restaurant.michelin.fr/restaurants/france/restaurants-michelin/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin?indirect=278',(error,response,body)=>
{
	if(!error && response.statusCode==200)
	{
        //console.log(html);
	var $ = cheerio.load(body);
	var tableau =[];
	
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
    })
}
});