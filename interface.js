'use strict';

let url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest&show-fields=body&show-elements=image&page-size=20&show-fields=thumbnail"

function getNewsData(){
  return fetch(url)
  .then(response => { return response.json() 
  // .then(json => {
  //   console.log(json.response)
  //   })
  })
};

function renderData(news){
  return news.response.results
}


getNewsData()
.then( response => {
  console.log(renderData(response))
}
)