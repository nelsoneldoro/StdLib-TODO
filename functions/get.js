const lib = require('lib')({token: "68ltSgU3BszF2cQ830cdFVJyX1120SCnLnAXHHviw4ddv58gaFqVLYxA0N8SMn2e"});

/**
* list the todos
* @returns {any}
*/
module.exports = (context, callback) => {

    lib.utils.storage.get({
        key: 'todo'
    }, (err, result) => { 
        return callback(null, result);
    });
};
