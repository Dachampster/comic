const fs = require('fs');
var path = require('path');
fs.readFile('config/seed.json', 'utf8', function (err, data) {
    if (err) {
        throw err;
    }
    const comics = JSON.parse(data);
    console.log(orm.find(comics, comics[199], 'backwards'));
    console.log(orm.grabIndex(comics, 10));

});

const orm = {
    // comics : this.comics,
    grabIndex: function (comics, lookup) {
        for (chapter in comics) {
            if (chapter == lookup) {
                return comics[chapter];
            } else if (comics[chapter] instanceof Object) {
                grabIndex(comics[chapter], lookup);
            }
        }
    },
    grabFirst: function (comics) {
        return comics[0];
    },
    grabLatest: function (comics) {
        return comics[comics.length];
    },

    find: function (comic, current, direction) {
        console.log(current);
        let index = current.index;
        if (direction == 'forwards') {

            lookup = comic[index] || comic[index - 1];
        }
        else if (direction == 'backwards') {

            lookup = comic[index - 2] || comic[index - 1];

        }
        return (lookup);
    }

}

module.exports = orm;