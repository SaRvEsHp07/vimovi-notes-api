require('dotenv').config();
const express = require('express');
const app = express();
const notesRoutes = require('./src/routes/notesRoutes');

app.use(express.json());
app.use('/api', notesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
