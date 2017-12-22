const lib = require('lib')({token: "68ltSgU3BszF2cQ830cdFVJyX1120SCnLnAXHHviw4ddv58gaFqVLYxA0N8SMn2e"});

/**
* mark a todo as done
* @param {number} index the todo index
* @returns {any}
*/
module.exports = (index, context, callback) => {

    return lib[`${context.service.identifier}.get`]((err, result) => {
        const todo = result[index];
        if(!todo) {
            return callback(null, 'index not found');
        }
        todo.done = true;

        lib.utils.storage.list.update({
            key: "todo",
            index: index,
            value: todo
        },(err, result) => {
            return lib[`${context.service.identifier}.get`]((err, result) => {
                callback(err, result);
            });
        });
    });
};
