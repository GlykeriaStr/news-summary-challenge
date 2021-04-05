'use strict';

let url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest&show-fields=body&show-elements=image&page-size=20&show-fields=thumbnail"
let articles = []

function getNewsData(){
  return fetch(url)
  .then(response => { return response.json() })
};

function renderNews(newsData){
  console.log(newsData.response.results)
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

function renderTitles(articlesArray){
  let titles = []
  for( let i = 0; i < articlesArray.length; i++){
    let title = articlesArray[i].webTitle
    let url = articlesArray[i].webUrl
    let titleHTML = `<h3 id=#${i+1}>${title}</h3><a href=${url} id=#${i+1} class='link'>Open</a>`
    titles.push(titleHTML)
  }
  return titles.join('')
}

getNewsData()
  .then( response => {
  let articles = renderNews(response)
  let titles = renderTitles(articles)
  document.getElementById('headlines').innerHTML = titles
  })
