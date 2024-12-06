const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // Missing error handling: should send an error response
      console.error(err);
    } else {
      res.json(user);
    }
  });
});