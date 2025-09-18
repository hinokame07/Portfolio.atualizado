const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Discord API proxy route - MUST be before static files
app.get('/api/discord-user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const botToken = process.env.DISCORD_BOT_TOKEN || 'Bot YOUR_DISCORD_BOT_TOKEN';
    
    const response = await fetch(`https://discord.com/api/v10/users/${userId}`, {
      headers: {
        'Authorization': botToken,
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`Discord API responded with status: ${response.status}`);
    }
    
    const userData = await response.json();
    
    // Map Discord API response to expected format
    const mappedData = {
      avatar: {
        id: userData.avatar
      },
      tag: userData.discriminator,
      username: userData.username,
      global_name: userData.global_name
    };
    
    res.json(mappedData);
  } catch (error) {
    console.error('Discord API Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all routes by serving index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});