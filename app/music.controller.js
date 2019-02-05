var Song = require('./music.model.js');

exports.create = function (req, res) {
    if (!req.body.title) {
        res.status(400).send({message: "Song can't be empty"});
    }
    var song = new Song({
        title: req.body.title,
        genre: req.body.genre,
        singer: req.body.singer,
        rating: req.body.rating
    });
    song.save(function (err, data) {
        console.log(data);
        if (err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while saving the Song."});
        }
        res.send(data);
    });
};

exports.getAll = function (req, res) {
    Song.find(function (err, songs) {
        if (err) {
            res.status(500).send({message: "Some error occurred while retrieving songs."});
        }
        res.send(songs);
    });
};

exports.getOne = function (req, res) {
    Song.findById(req.params.songId, function (err, data) {
        if (err) {
            res.status(500).send({message: "Could not get a song with id " + req.params.songId});
        }
        res.send(data);
    });
};

exports.edit = function (req, res) {
    Song.findById(req.params.songId, function (err, song) {
        if (err) {
            res.status(500).send({message: "Could not find a song with id " + req.params.songId});
        }

        song.title = req.body.title;
        song.genre = req.body.genre;
        song.singer = req.body.singer;
        song.rating = req.body.rating;

        song.save(function (err, data) {
            if (err) {
                res.status(500).send({message: "Couldn't edit song with id " + req.params.id});
            }
            res.send(data);
        });
    });
};

exports.delete = function (req, res) {
    Song.remove({_id: req.params.songId}, function (err, data) {
        if (err) {
            res.status(500).send({message: "Could not delete song with id " + req.params.songId});
        }
        res.send({message: "Song deleted successfully!"});
    });
};