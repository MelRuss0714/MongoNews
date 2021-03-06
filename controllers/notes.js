var makeDate = require("../scripts/date");
var Note = require("../models/Notes");

module.exports = {
    get: function (query, cb) {
        Note.find({
            _headlineId: data._id
        }, cb);
    },
    save: function (data, cb) {
        var newNote = {
            _headlineId: data._id,
            date: makeDate(),
            noteText: date.noteText
        };
        Note.create(newNote, function(err, doc){
            if (err){
                console.log(err);
            }
            else {
                console.log(doc);
                cb(doc);
            }
        });
    },
    delete: function(data, cb){
        Note.remove({
            _id: data._id
        }, cb);
    }
};