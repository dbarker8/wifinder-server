var fetch = require('node-fetch');
var cheerio = require('cheerio');

module.exports = function(){
  return new Promise((resolve, reject) => {
    fetch('https://www.airbnb.com')
    .then(result => result.text())
    .then(result => {
      const $ = cheerio.load(result);
      let key = null;
      let data = $('#_bootstrap-layout-init').attr('content');
      if(data){
        data = JSON.parse(data);
        key = data.api_config.key;
      }
      resolve(key);
    })

  }).catch(err => reject(null))
}
