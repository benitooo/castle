const request_promise = require('request-promise');
const cheerio = require('cheerio');

const liste_chef = require('./liste_chef');
const scrap = require('./scrap');
const liste_prix = require('./liste_des_prix');

//retourne la liste des chefs des restaurants étoilés identifiés dans relais et chateaux 
const url = 'https://www.relaischateaux.com/fr/site-map/etablissements';



function fitting(tab1,tab2){
    var liste_fits=[];
    for(var i =0;i<tab1.length;i++){
      for(var j=0;j<tab2.length;j++){
        if(tab1[i].chef==tab2[j]){
          liste_fits.push(tab1[i]);
        }
      }
    }
  
    return tabResultat;
  }
async function Comparaison(){
 
  var noms_chef_mich = await liste_chef.chef();
  var noms_chef_rec = await scrap;
  var présence = fitting(nom_chef_mich,nom_chef_rec);
  var liste_prix= await liste_des_prix.prix(présence);
}


Comparaison();