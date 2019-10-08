const sequelize = require('../db/sequelize');
const Sequelize = require('sequelize');

const artists = sequelize.define('artists', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: 'Must have a first name!'
            },
            isAlpha: {
                args: true,
                msg: 'Only letters allowed'
            },
            len: {
                args: [2, 120],
                msg: 'First name must be between 2-120 characters',
            },
        },
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: 'Must have a last name!'
            },
            isAlpha: {
                args: true,
                msg: 'Only letters allowed'
            },
            len: {
                args: [2, 120],
                msg: 'Last name must be between 2-120 characters',
            },
        },
    }
}, {
    timestamps: false,
});

module.exports = artists;