const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express()

app.get('/api/members', (req, res) => {
  res.status(200).json({message: "Get members"})
})

app.listen(port, () => console.log(`Server running on port ${port}`))

