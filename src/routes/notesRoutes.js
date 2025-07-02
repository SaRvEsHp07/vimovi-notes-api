const express = require('express');
const router = express.Router();
const controller = require('../controllers/notesController');
const validate = require("../middleware/validateRequest");
const { noteSchema } = require('../validators/noteValidator');


router.post('/notes', validate(noteSchema), controller.create);
router.get('/notes', validate(noteSchema), controller.getAll);
router.get('/notes/:id', controller.getById);
router.put('/notes/:id', controller.update);
router.delete('/notes/:id', controller.remove);

module.exports = router;
