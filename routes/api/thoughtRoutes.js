const router = require('express').Router();
const {
    getAllThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    addNewThought,
} = require('../../controllers/thoughtController')

// /api/thoughts
router.route('/').get(getAllThoughts);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// /api/thoughts/:userId - testing
router.route('/:userId').post(createThought);

module.exports = router;