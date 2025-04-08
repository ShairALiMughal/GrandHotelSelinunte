const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Use Gemini 1.5 Flash (fastest, efficient)
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const sessionMemory = new Map();

app.post('/ask', async (req, res) => {
  const { question, context, sessionId } = req.body;

  if (!sessionMemory.has(sessionId)) {
    sessionMemory.set(sessionId, [
      {
        role: "user",
        content: context || "You are a helpful hotel assistant. Keep replies short and helpful."
      }
    ]);
  }

  const messages = sessionMemory.get(sessionId);
  messages.push({ role: "user", content: question });

  try {
    const chat = model.startChat({
      history: messages.map(m => ({
        role: m.role,
        parts: [{ text: m.content }]
      }))
    });

    const result = await chat.sendMessage(question);
    const reply = result.response.text();

    messages.push({ role: "assistant", content: reply });

    res.json({ answer: reply });
  } catch (err) {
    console.error("❌ Gemini Proxy Error:", err);
    res.status(500).json({ error: "Failed to get response from Gemini AI." });
  }
});

app.listen(5000, () => {
  console.log('✅ Gemini Proxy running on http://localhost:5000');
});
