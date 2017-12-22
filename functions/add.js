const lib = require('lib')({token: "68ltSgU3BszF2cQ830cdFVJyX1120SCnLnAXHHviw4ddv58gaFqVLYxA0N8SMn2e"});

/**
* add a todo
* @param {string} name Todo name
* @returns {any}
*/
module.exports = (name, context, callback) => {

    lib.utils.storage.list.add({
        key: "todo",
        value: {title: name, done: false}
    }, (err, result) => {
        if(err) {
            lib.utils.storage.list.create({
                key: "todo"
            }, (err, result) => {
                  return lib[`${context.service.identifier}.add`](name)
            });
        }

        return lib[`${context.service.identifier}.get`]((err, result) => {
            callback(err, result);
         });
    });
};
