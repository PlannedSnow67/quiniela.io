const { Request, Response } = require('express');

const createTeam = (req, res) => {
    try {
        const { body } = req;
        res.json({
            message: 'Team created',
            data: body
        });
    } catch (error) {

    }
}

const readAllTeams = (req, res) => {
    try {
        res.send('readAllTeams');
    } catch (error) {

    }

}

const readOneTeam = (req, res) => {
    const { id } = req.params;
    res.json({
        id
    });
    try {
        res.send.json
    } catch (error) {

    }

}


const updateTeam = (req, res) => {
    try {
        res.send('updateTeam');
    } catch (error) {

    }

}

const deleteTeam = (req, res) => {
    try {
        res.send('deleteTeam');
    } catch (error) {

    }

}


module.exports = {
    createTeam,
    readAllTeams,
    readOneTeam,
    updateTeam,
    deleteTeam
};