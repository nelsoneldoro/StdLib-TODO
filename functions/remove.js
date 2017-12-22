const lib = require('lib')({token: "68ltSgU3BszF2cQ830cdFVJyX1120SCnLnAXHHviw4ddv58gaFqVLYxA0N8SMn2e"});

/**
* remove a todo
* @param {number} index the todo index
* @returns {any}
*/
module.exports = (index, context, callback) => {

    lib.utils.storage.list.remove({
        key: "todo",
        index: index
    },(err, result) => {
      return lib[`${context.service.identifier}.get`]((err, result) => {
         callback(err, result);
      });
  });
};
