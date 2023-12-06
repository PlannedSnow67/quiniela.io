const { Router } = require('express');
const { createTeam, readAllTeams, readOneTeam, updateTeam, deleteTeam } = require('../controllers');
const { teamSchema, getTeamByIdSchema } = require('../schemas');

const { validateSchema } = require('../middlewares');

const router = Router();

// create
router.post('/', validateSchema(teamSchema, 'body'), createTeam);

// read all
router.get('/', readAllTeams);

// read one
router.get('/:id', validateSchema(getTeamByIdSchema, 'query'), readOneTeam);

// update
router.put('/:id', updateTeam);

// delete
router.delete('/:id', deleteTeam);



module.exports = router;