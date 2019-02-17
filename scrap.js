const request = require('request');
const cheerio = require('cheerio');
request('https://www.relaischateaux.com/fr/site-map/etablissements?fbclid=IwAR1N8kTL8UeswgVcnKkwcyVez23ky6IjrycQO9TqavWe5dOWhHx5GOG8Q-I',(error,response,body)=>
{
	if(!error && response.statusCode==200)
	{
        //console.log(html);
	var $ = cheerio.load(body);
	var tableau =[];
	
	$("#countryF").each(function(i)
	{
		if($(this).find("h3").text() === 'France')
		{
			$(this).find("li").each(function(j)
			{
				$(this).find("a").each(function(k)
				{
					if(k==0)
					{
					tableau.push($(this).filter("a").next().text().trim());
					console.log($(this).filter("a").next().text().trim());
					}
				}
				)}
			)}
	}
	
		)
		return tableau;
	}
});




