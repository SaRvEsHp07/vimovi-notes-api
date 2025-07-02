const noteService = require('../services/firestoreService');

exports.getAll = async (req, res) => {
  try {
    const notes = await noteService.getAllNotes();
    res.json(notes);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const note = await noteService.getNoteById(req.params.id);
    res.json(note);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content){
        return res.status(400).json({ 
            error: 'Title and content required' 
        });
    }
    const newNote = await noteService.createNote({ title, content });
    res.status(201).json(newNote);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content){
        return res.status(400).json({ 
            error: 'Title and content required' 
        });
    }
    const updatedNote = await noteService.updateNote(req.params.id, { title, content });
    res.json(updatedNote);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await noteService.deleteNote(req.params.id);
    res.json({ message: 'Note deleted' });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};
