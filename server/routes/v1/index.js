const express = require('express');
const router = express.Router();

const playlists = require('./playlists');
const artists = require('./artists');
const albums = require('./albums');

router.use('/playlists', playlists);
router.use('/artists', artists);
router.use('/albums', albums);

module.exports = router;