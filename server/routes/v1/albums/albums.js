const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const { Op } = Sequelize;
const { Artists } = require('../../../../models');


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
        const Artists = await Artists.findAll(options);
        res.json(Artists);
    } catch (e) {
        next(e);
    }
}

const getArtist = async (req, res, next) => {
    try {
        const artist = await Artists.findById(req.params.id);
        res.json(artist);
    } catch (e) {
        next(e);
    }
}

router.get('/', getArtists);
router.get('/:id', getArtist);

module.exports = router;