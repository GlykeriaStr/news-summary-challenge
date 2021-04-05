'use strict';

let url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body"

function getNewsData(){
  return fetch(url)
  .then(response => {response.json()
  .then(json => {
    console.log(json.response.content)
    })
  })
};

function renderData(news){
  return news.response
}


getNewsData()