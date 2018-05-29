const fs = require('fs');
var path = require('path');
fs.readFile('config/seed.json', 'utf8', function(err,data){
    if (err){
        throw err;
    }
    const comics = JSON.parse(data);
   console.log(orm.find(comics,comics[100],'backward'));
});

// orm.grabIndex(comics, comics.length, function(page) {
//     console.log(page.src);
// });

const orm = {
    grabIndex : function(comics, lookup) {
        for (index in comics) {
            if (index == lookup - 1) {
               return comics[index];
            } else if (comics[index] instanceof Object) {
                grabIndex(comics[index], lookup);
            }
        }
    },
    grabFirst : function(comics){
        return comics[0];
    },
    grabLatest : function(comics){
        return comics[comics.length];
    },

    find : function(comic,current, direction) {
        let index = current.index;
        switch (direction){
            case 'forward':
            newPage = comic[index + 1] || comic[index];
            break;
            case 'backward':
            newPage = comic[index - 1] || comic[index];
            break;
        }
        return this.grabIndex(newPage);
    }
    
}
module.exports = orm;