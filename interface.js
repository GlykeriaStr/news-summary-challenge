'use strict';

let url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest&show-fields=body&show-elements=image&page-size=20&show-fields=thumbnail"
let articles = []

function getNewsData(){
  return fetch(url)
  .then(response => { return response.json() })
};

function renderNews(newsData){
  // return news.response.results
  let allNews = newsData.response.results
  for(let i = 0 ; i < allNews.length ; i++){
    let selected = {
      webTitle: allNews[i].webTitle,
      webUrl: allNews[i].webUrl
    }
    articles.push(selected)
  }
  console.log(articles)
  return articles
}

function renderTitles(articles){
  let titles = []
  for( let i = 0; i < articles.length; i++){
    let title = articles[i].webTitle
    // let url = articles[i].webUrl
    let titleHTML = `<p id=#${[i]+1}>${title}</p>`
    titles.push(titleHTML)
  }
  return titles
}

getNewsData()
  .then( response => {
  let articles = renderNews(response)
  let titles = renderTitles(articles)
  document.getElementById('headlines').innerHTML = titles
  })
