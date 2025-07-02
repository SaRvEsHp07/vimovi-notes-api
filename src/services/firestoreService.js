const db = require('../firebase');
const collection = db.collection('notes');

// Get all notes
const getAllNotes = async () => {
    const notes = await collection.get();
    return notes.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
};

// Get a note by ID
const getNoteById = async (id) => {
    const note = await collection.doc(id).get();
    if (!note.exists) throw new Error("Note not found");
    return {
        id: note.id,
        ...note.data()
    };
};

// Create a new note
const createNote = async ({ title, content }) => {
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
    const note = await collection.add({
        title,
        content,
        createdAt,
        updatedAt
    });
    return {
        id: note.id,
        title,
        content,
        createdAt,
        updatedAt
    };
};

// Update a note
const updateNote = async (id, { title, content }) => {
    const updatedAt = new Date().toISOString();
    await collection.doc(id).update({ title, content, updatedAt });
    return await getNoteById(id);
};

// Delete a note
const deleteNote = async (id) => {
    await collection.doc(id).delete();
};

module.exports = {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
};
