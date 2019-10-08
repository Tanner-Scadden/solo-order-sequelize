const sequelize = require('../db/sequelize');
const Sequelize = require('sequelize');

const playlists = sequelize.define('playlists', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    playlist_name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    timestamps: false,
});

module.exports = playlists;