const fs = require('fs');
var path = require('path');
let comics = fs.readFileSync('config/seed.json', 'utf8', function (err, data) {
    if (err) {
        throw err;
    }
    return (data);

});
let comic = JSON.parse(comics);

function Orm (comics){
    this.comic = comic,
    this.grabChapters = function(comics){
    let length = comics[comics.length - 1].chapter;
    return(length)
},
    this.grabFirst = function(comics, lookup) {
        for(var i in comics){
            if (comics[i].chapter == lookup){
              return (comics[i]);
            }
            
        }

    },
    this.find= function (comic, current, direction) {
        switch (direction){
            case 'forwards':
            return comic[current] || comic[current - 1];
            break;
            case 'backwards':
            return comic[current - 2] || comic[current - 1];
            break;
            case 'first':
            return comic[0];
            break;
            case 'latest':
            return (comic[comic.length - 1]);
            break;
            case '':
            return comic[current - 1];
            break;

            
        }
    }

}
let orm = new Orm(comic);
// console.log(orm.grabChapters(comic));
//console.log(orm.grabFirst(comic, 3));
//console.log(orm.grabIndex(comic, 10));
//console.log(orm.find(comic,199,'backwards'));
//console.log(orm.grabLatest(comic));
module.exports = orm;