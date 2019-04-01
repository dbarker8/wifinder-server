var fetch = require('node-fetch');
var cheerio = require('cheerio');

// get API key from airbnb
module.exports = function(){
  return new Promise((resolve, reject) => {
    fetch('https://www.airbnb.com')
    .then(result => result.text())
    .then(result => {
      const $ = cheerio.load(result);
      let key = null;
      let el = $('#_bootstrap-layout-init');
      let content = $(el).attr('content');
      if(content){
        content = JSON.parse(content);
        key = content.api_config.key;
      }
      resolve(key);
    })

  }).catch(err => reject(null))
}
