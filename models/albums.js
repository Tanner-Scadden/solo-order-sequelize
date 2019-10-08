const sequelize = require('../db/sequelize');
const Sequelize = require('sequelize');

const albums = sequelize.define('albums', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    artists_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    album_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = albums;