const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

const highScoresFile = path.join(__dirname, 'highScores.json');

// Load high scores from local file
const getHighScores = () => {
  if (fs.existsSync(highScoresFile)) {
    const data = fs.readFileSync(highScoresFile);
    return JSON.parse(data);
  }
  return [];
};

// Get high scores
app.get('/api/game/high-scores', (req, res) => {
  const highScores = getHighScores();
  res.json(highScores);
});

// Submit high score
app.post('/api/game/submit-score', (req, res) => {
  const { playerName, time } = req.body;
  const highScores = getHighScores();

  // Add new high score
  highScores.push({ playerName, time });
  highScores.sort((a, b) => a.time - b.time); // Sort by time

  // Keep only top 5 high scores
  if (highScores.length > 5) {
    highScores.splice(5);
  }

  // Save updated high scores to file
  fs.writeFileSync(highScoresFile, JSON.stringify(highScores));

  res.status(200).json({ message: 'High score submitted successfully!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
