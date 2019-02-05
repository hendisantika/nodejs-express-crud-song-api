module.exports = function (app) {

    var song = require('./music.controller.js');

    app.post('/song', song.create);

    app.get('/songs', song.getAll);

    app.get('/song/:songId', song.getOne);

    app.put('/song/:songId', song.edit);

    app.delete('/song/:songId', song.delete);

};