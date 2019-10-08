const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const { Op } = Sequelize;
const { Artists, Albums } = require('../../../../models');

Artists.hasMany(Albums, {
    foreignKey: 'artists_id',
});

Albums.belongsTo(Artists, {
    foreignKey: 'artists_id',
});

const getArtists = async (req, res, next) => {
    try {
        const searchTerms = req.query;
        const options = {};

        if (searchTerms.name) {
            options.where = {
                playlist_name: {
                    [Op.like]: `%${searchTerms.name}%`,
                }
            }
        }
        const artists = await Artists.findAll(options);
        res.json(artists);
    } catch (e) {
        next(e);
    }
}

const postArtists = async (req, res, next) => {
    try {
        const data = req.body;
        await Artists.create(data);
        res.json('created');
    } catch (e) {
        next(e);
    }
}

const getArtist = async (req, res, next) => {
    try {
        const artist = await Artists.findByPk(req.params.id);
        res.json(artist);
    } catch (e) {
        next(e);
    }
}

const getAlbumsByArtist = async (req, res, next) => {
    try {
        const options = {};
        options.include = [Albums];
        const artistsWithAlbums = await Artists.findByPk(req.params.id, options);
        res.json(artistsWithAlbums);
    } catch (e) {
        next(e);
    }
}

router
    .get('/', getArtists)
    .post('/', postArtists);
router.get('/:id', getArtist);
router.get('/:id/albums', getAlbumsByArtist);

module.exports = router;