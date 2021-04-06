'use strict';

let url = "http://content.guardianapis.com/search?order-by=newest&show-fields=bodyText&api-key=test"
let articles = []

function getNewsData(){
  return fetch(url)
  .then(response => { return response.json() })
};

function renderNews(newsData){
  console.log(newsData.response)
  console.log(newsData.response.results)
  let allNews = newsData.response.results
  for(let i = 0 ; i < allNews.length ; i++){
    let selected = {
      webTitle: allNews[i].webTitle,
      webUrl: allNews[i].webUrl,
      body: allNews[i].fields.bodyText
    }
    articles.push(selected)
  }
  return articles
}

function renderTitles(articlesArray){
  let titles = []
  for( let i = 0; i < articlesArray.length; i++){
    let title = articlesArray[i].webTitle
    let body = articlesArray[i].body
    let titleHTML = `<div class='box'><h3 class ='title' id=#${i+1}>${title}</h3><button onclick=body id=#${i+1} class='link'>Open</button></div>`
    titles.push(titleHTML)
  }
  return titles.join('')
}

function renderBody(articlesArray){
  let bodyText=[]
  for( let i = 0; i < articlesArray.length; i++){
    let body = articlesArray[i].body
    let bodyHTML = `<p>${body}</p>`
    bodyText.push[bodyHTML]
  }
  console.log(bodyText)
  return bodyText
}
getNewsData()
  .then( response => {
  let articles = renderNews(response)
  let titles = renderTitles(articles)
  let body = renderBody(articles)
  document.getElementById('headlines').innerHTML = titles
  document.getElementById('text').innerHTML = body
  })

