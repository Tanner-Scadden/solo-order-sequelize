const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const { Op } = Sequelize;
const { Playlists } = require('../../../../models');

const getPlaylists = async (req, res, next) => {
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
        const playlists = await Playlists.findAll(options);
        res.json(playlists);
    } catch (e) {
        next(e);
    }
}

const getPlaylist = async (req, res, next) => {
    try {
        const playlist = await Playlists.findByPk(req.params.id);
        res.json(playlist);
    } catch (e) {
        next(e);
    }
}

const deletePlaylists = async (req, res, next) => {
    try {
        const playlistToDelete = await Playlists.findByPk(req.params.id);
        await playlistToDelete.destroy();
        res.json('deleted');
    } catch (e) {
        next(e);
    }
}

router.get('/', getPlaylists);
router.delete('/:id', deletePlaylists);
router.get('/:id', getPlaylist);

module.exports = router;