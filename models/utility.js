const fs = require('fs');
const path = require('path');
let chapters = fs.readdirSync('../public/comic', 'utf8');
let html;
let chpIndex = 0;
let pgIndex = 0;
let curIndex = 0;
const fullComic = [];

function Chapter(num, pages) {
  this.num = num;
  this.pages = pages;
}
function Page(index, src, chapter, num) {
  this.index = index;
  this.src = src;
  this.chapter = chapter;
  this.num = num;
}
const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
chapters.sort(collator.compare);

chapters.forEach(chapter => {
  if (chapter != '.DS_Store') {
    chpIndex++;
    let pages = fs.readdirSync('../public/comic/' + chapter, 'utf8');


    pages.sort(collator.compare);
    let pageList = [];
    pages.forEach(page => {
      if (page.startsWith('Page')) {
        pgIndex++;
        let pgNum = pgIndex - curIndex;
        let curPage = new Page(pgIndex, page, chpIndex, pgNum);
        pageList.push(curPage);
      }

    })
    curIndex = pgIndex;
    // let curChapter = new Chapter(chpIndex, pageList);
    pageList.forEach(element => {
      fullComic.push(element);
    })
    
  }

})
let comicString = JSON.stringify(fullComic);
fs.writeFile("../config/seed.json",comicString,"utf8", function (err){
  if (err){
    return console.log(err);
  };
  console.log("it worked");
});