const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Sleep messages for each API
const sleepMessages = {
  overthinking: [
    "Waking up the overthinking detector...",
    "The API is overthinking whether it should wake up...",
    "Currently analyzing if this request was necessary...",
    "API is having second thoughts about everything...",
    "Contemplating the philosophical implications of your message..."
  ],
  
  plant: [
    "Checking if the server plants are still alive...",
    "API went dormant like your succulent...",
    "Photosynthesizing some responses...",
    "The server was playing dead (just like your plant)",
    "Watering the digital garden..."
  ],
  
  procrastination: [
    "API will start working... eventually...",
    "Currently procrastinating on your procrastination...",
    "The server is doing everything except what it should be doing...",
    "API is reorganizing its digital desk instead of responding...",
    "Just five more minutes..."
  ],
  
  bedWorthiness: [
    "API is still in bed, deciding if today is worth it...",
    "Calculating optimal snooze button presses...",
    "The server overslept (again)...",
    "Contemplating the existential weight of getting up...",
    "Checking the weather and immediately regretting it..."
  ],
  
  passiveAggressive: [
    "The API will respond when it's ready, thanks...",
    "Server is taking its time, as requested...",
    "API is crafting the perfect non-confrontational response...",
    "Currently translating direct communication into corporate speak...",
    "Finding the most diplomatic way to say what you really mean..."
  ],
  
  smallTalk: [
    "Preparing socially acceptable conversation starters...",
    "API is practicing small talk in the mirror...",
    "Generating weather-based conversation topics...",
    "Server is rehearsing casual interactions...",
    "Calculating optimal awkwardness levels..."
  ],
  
  statusFeelings: [
    "Converting human emotions to HTTP codes...",
    "Debugging your life status...",
    "Server is having an identity crisis too...",
    "Mapping feelings to technical difficulties...",
    "Error 418: Server is a teapot having an existential moment..."
  ],
  
  buzzwordBingo: [
    "Synergizing enterprise solutions...",
    "Leveraging scalable paradigm shifts...",
    "The API is circling back on low-hanging fruit...",
    "Optimizing synergistic value propositions...",
    "Moving the needle on core competencies..."
  ]
};

// Helper function to get random sleep message
const getSleepMessage = (apiType) => {
  const messages = sleepMessages[apiType] || sleepMessages.overthinking;
  return messages[Math.floor(Math.random() * messages.length)];
};

// Helper function to simulate thinking time
const simulateProcessing = () => {
  return new Promise(resolve => {
    setTimeout(resolve, Math.random() * 2000 + 500); // 0.5-2.5 second delay
  });
};

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: "Life Utils API - Because adulting is hard",
    status: "probably fine",
    energy_level: "meh",
    endpoints: [
      "/api/overthinking",
      "/api/plant-death-detector",
      "/api/status-feelings", 
      "/api/procrastination-justify",
      "/api/small-talk",
      "/api/bed-worthiness",
      "/api/passive-aggressive",
      "/api/buzzword-bingo"
    ],
    disclaimer: "Response times: Whenever we feel like it"
  });
});

// Wake up endpoint (does nothing but feels good to click)
app.get('/api/wake-up', async (req, res) => {
  await simulateProcessing();
  res.json({
    message: "API is stretching and having coffee...",
    actuallyDidSomething: false,
    butYouFeelBetter: true,
    timestamp: new Date().toISOString()
  });
});

// Overthinking Detector API
app.post('/api/overthinking', async (req, res) => {
  await simulateProcessing();
  const { message } = req.body;
  
  if (!message) {
    return res.status(400).json({ error: "No message to analyze (see, you're overthinking the API call)" });
  }
  
  // Simple overthinking detection
  const overthinkingWords = ['maybe', 'should', 'think', 'probably', 'possibly', 'might', 'could', 'would', 'actually', 'really'];
  const questionMarks = (message.match(/\?/g) || []).length;
  const wordCount = message.split(' ').length;
  const overthinkingScore = overthinkingWords.filter(word => 
    message.toLowerCase().includes(word)
  ).length;
  
  const isOverthinking = overthinkingScore > 2 || questionMarks > 1 || wordCount > 50;
  
  res.json({
    sleepMessage: getSleepMessage('overthinking'),
    isOverthinking,
    confidence: Math.min(90, overthinkingScore * 20 + questionMarks * 15),
    analysis: {
      overthinkingWords: overthinkingScore,
      questionMarks,
      wordCount,
      redFlags: isOverthinking ? ["Too many qualifiers", "Excessive questioning", "Analysis paralysis detected"] : []
    },
    suggestion: isOverthinking ? 
      "Just send the message. Life's too short." : 
      "You're good! Send away.",
    timestamp: new Date().toISOString()
  });
});

// Plant Death Detector API
app.post('/api/plant-death-detector', async (req, res) => {
  await simulateProcessing();
  const { description, lastWatered, plantType } = req.body;
  
  // Simple plant analysis based on description keywords
  const deadWords = ['brown', 'yellow', 'wilted', 'dry', 'crispy', 'falling', 'dead'];
  const aliveWords = ['green', 'growing', 'new', 'bright', 'healthy', 'flowering'];
  
  const deadScore = deadWords.filter(word => 
    description?.toLowerCase().includes(word)
  ).length;
  const aliveScore = aliveWords.filter(word => 
    description?.toLowerCase().includes(word)
  ).length;
  
  const daysSinceWatered = lastWatered ? 
    Math.floor((Date.now() - new Date(lastWatered)) / (1000 * 60 * 60 * 24)) : 7;
  
  const isDead = deadScore > aliveScore || daysSinceWatered > 14;
  
  res.json({
    sleepMessage: getSleepMessage('plant'),
    isDead,
    deathProbability: Math.min(95, deadScore * 25 + Math.max(0, daysSinceWatered - 3) * 5),
    diagnosis: isDead ? 
      "I'm sorry for your loss. It's not your fault (it totally is)." :
      "Still kicking! Your plant believes in you.",
    treatment: isDead ? 
      ["Accept the inevitable", "Plan a small funeral", "Try a plastic plant next time"] :
      ["Water it (novel concept)", "Give it some sunlight", "Talk to it (they like gossip)"],
    daysSinceWatered,
    timestamp: new Date().toISOString()
  });
});

// HTTP Status Feelings API
app.get('/api/status-feelings', async (req, res) => {
  await simulateProcessing();
  const { mood } = req.query;
  
  const statusMappings = {
    great: { code: 200, message: "OK - Everything is working perfectly!" },
    good: { code: 201, message: "Created - You made something happen today!" },
    okay: { code: 202, message: "Accepted - Your existence has been acknowledged" },
    meh: { code: 204, message: "No Content - You exist but barely" },
    tired: { code: 408, message: "Request Timeout - You need sleep" },
    confused: { code: 400, message: "Bad Request - Nothing makes sense" },
    anxious: { code: 429, message: "Too Many Requests - Slow down your brain" },
    angry: { code: 403, message: "Forbidden - Access to chill is denied" },
    sad: { code: 404, message: "Not Found - Happiness.exe is missing" },
    overwhelmed: { code: 503, message: "Service Unavailable - Currently out of order" },
    broken: { code: 500, message: "Internal Server Error - Something is very wrong" },
    dead: { code: 418, message: "I'm a teapot - Existential crisis mode activated" }
  };
  
  const randomStatuses = Object.values(statusMappings);
  const status = mood && statusMappings[mood.toLowerCase()] ? 
    statusMappings[mood.toLowerCase()] : 
    randomStatuses[Math.floor(Math.random() * randomStatuses.length)];
  
  res.json({
    sleepMessage: getSleepMessage('statusFeelings'),
    httpStatus: status.code,
    meaning: status.message,
    technicalTranslation: `Your life is currently returning ${status.code}`,
    debugSuggestion: status.code >= 400 ? 
      "Have you tried turning yourself off and on again?" : 
      "Keep doing whatever you're doing!",
    timestamp: new Date().toISOString()
  });
});

// Procrastination Justifier API
app.post('/api/procrastination-justify', async (req, res) => {
  await simulateProcessing();
  const { task, deadline } = req.body;
  
  const justifications = [
    "Studies show that pressure creates diamonds. You're just building pressure.",
    "The subconscious mind needs time to process. You're being strategic.",
    "Parkinson's Law states work expands to fill time. You're being efficient.",
    "Creative minds work better under pressure. You're optimizing for creativity.",
    "You're giving others a chance to step up. You're being generous.",
    "The requirements might change anyway. You're being adaptable.",
    "Your future self will have more experience. You're investing in growth.",
    "Rome wasn't built in a day, and neither should your task be."
  ];
  
  const timeBasedExcuses = {
    soon: "There's still time! You work better under pressure anyway.",
    today: "Afternoon productivity is scientifically proven to be higher.",
    overdue: "At this point, they're expecting it to be late. You're meeting expectations."
  };
  
  const daysUntilDeadline = deadline ? 
    Math.ceil((new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24)) : null;
  
  let timeCategory = 'soon';
  if (daysUntilDeadline !== null) {
    if (daysUntilDeadline <= 0) timeCategory = 'overdue';
    else if (daysUntilDeadline <= 1) timeCategory = 'today';
  }
  
  res.json({
    sleepMessage: getSleepMessage('procrastination'),
    justification: justifications[Math.floor(Math.random() * justifications.length)],
    timeSpecificExcuse: timeBasedExcuses[timeCategory],
    scientificBacking: "92% of statistics are made up on the spot, but this sounds legitimate.",
    productivityHack: "You're not procrastinating, you're 'strategic delayed execution.'",
    daysUntilDeadline,
    panicLevel: daysUntilDeadline <= 0 ? "Maximum" : daysUntilDeadline === 1 ? "High" : "Manageable",
    timestamp: new Date().toISOString()
  });
});

// Small Talk Emergency API
app.get('/api/small-talk', async (req, res) => {
  await simulateProcessing();
  const { context, relationship } = req.query;
  
  const starters = {
    elevator: [
      "This elevator music really takes me back to... absolutely nothing.",
      "I wonder if anyone's ever gotten stuck in here with someone interesting.",
      "Do you think the floor buttons ever get tired of being pushed around?"
    ],
    coffee: [
      "Is it just me or does Monday coffee hit different than Friday coffee?",
      "I'm convinced this place has a secret menu they don't tell anyone about.",
      "Do you think baristas judge us based on our orders? Because they should."
    ],
    weather: [
      "This weather makes me want to either conquer the world or take a nap.",
      "Remember when we used to check the weather by going outside?",
      "I'm pretty sure the weather app is just guessing at this point."
    ],
    work: [
      "Do you ever wonder what people did in meetings before PowerPoint?",
      "I'm starting to think 'synergy' is just a made-up word we all agreed to use.",
      "Is it weird that I'm more excited about lunch than this project?"
    ]
  };
  
  const contextKey = context in starters ? context : 'weather';
  const starter = starters[contextKey][Math.floor(Math.random() * starters[contextKey].length)];
  
  res.json({
    sleepMessage: getSleepMessage('smallTalk'),
    conversationStarter: starter,
    context: contextKey,
    confidenceBoost: "You got this! Worst case, you both acknowledge it's awkward and move on.",
    exitStrategy: "Look at your phone and say 'Oh, I should take this.' Works every time.",
    relationshipAdvice: relationship === 'stranger' ? 
      "Keep it light, keep it weird." : 
      "They already know you're strange. Embrace it.",
    timestamp: new Date().toISOString()
  });
});

// Bed Worthiness Calculator API
app.get('/api/bed-worthiness', async (req, res) => {
  await simulateProcessing();
  const { weather, mood, responsibilities, energy } = req.query;
  
  let score = 50; // Base score
  
  // Weather impact
  if (weather === 'rainy') score += 20;
  if (weather === 'sunny') score -= 15;
  if (weather === 'cold') score += 15;
  if (weather === 'hot') score += 10;
  
  // Mood impact
  if (mood === 'terrible') score += 25;
  if (mood === 'meh') score += 10;
  if (mood === 'good') score -= 20;
  
  // Responsibilities impact
  const responsibilityCount = responsibilities ? responsibilities.split(',').length : 0;
  score -= responsibilityCount * 5;
  
  // Energy impact
  if (energy === 'zero') score += 30;
  if (energy === 'low') score += 15;
  if (energy === 'high') score -= 25;
  
  // Cap the score
  score = Math.max(0, Math.min(100, score));
  
  const recommendations = {
    high: "Definitely stay in bed. The world will survive without you for one day.",
    medium: "Coin flip territory. If you have to think about it, the answer is probably bed.",
    low: "You should probably get up, but we won't judge if you don't."
  };
  
  let worthinessLevel = 'medium';
  if (score >= 70) worthinessLevel = 'high';
  if (score <= 30) worthinessLevel = 'low';
  
  res.json({
    sleepMessage: getSleepMessage('bedWorthiness'),
    bedWorthinessScore: score,
    recommendation: recommendations[worthinessLevel],
    factors: {
      weather: weather || 'unknown',
      mood: mood || 'unspecified', 
      responsibilities: responsibilityCount,
      energy: energy || 'mysterious'
    },
    philosophicalThought: "Remember: bed is always there for you. Responsibilities are temporary.",
    timestamp: new Date().toISOString()
  });
});

// Passive Aggressive Translator API
app.post('/api/passive-aggressive', async (req, res) => {
  await simulateProcessing();
  const { message, intensity } = req.body;
  
  if (!message) {
    return res.status(400).json({ 
      error: "I'd be happy to translate your message, if you provide one..." 
    });
  }
  
  const translations = {
    "This is broken": "I'm wondering if we might explore some alternative approaches to this delightful challenge.",
    "You're wrong": "That's certainly one way to look at it! I might have a slightly different perspective.",
    "This is stupid": "This is... interesting. I'm sure there's valuable learning here for all of us.",
    "I don't want to do this": "I'm excited to tackle this when my schedule allows for the proper attention it deserves.",
    "You didn't do your job": "I'm just checking if there might have been some miscommunication about expectations.",
    "This meeting is pointless": "I appreciate everyone taking time from their busy schedules for this thoughtful discussion.",
    "You're late": "No worries at all! I hope everything is going well on your end.",
    "That makes no sense": "Could you help me understand the thinking behind this approach?"
  };
  
  // Try to find a direct translation first
  let translation = translations[message];
  
  // If no direct match, apply transformation rules
  if (!translation) {
    translation = message
      .replace(/is broken/gi, 'presents some unique opportunities for improvement')
      .replace(/doesn't work/gi, 'isn\'t quite meeting our expectations yet')
      .replace(/stupid/gi, 'creatively unconventional')
      .replace(/wrong/gi, 'beautifully different from my perspective')
      .replace(/hate/gi, 'am not completely in love with')
      .replace(/terrible/gi, 'has room for enhancement');
    
    // Add corporate fluff
    if (translation === message) { // No changes made
      translation = `I appreciate you sharing this with me. ${message} I'm sure we can find a path forward that works for everyone.`;
    }
  }
  
  const intensityModifiers = {
    low: translation,
    medium: `Thanks for bringing this to my attention. ${translation}`,
    high: `Per my last email, I wanted to circle back on this. ${translation} I'm confident we can leverage this challenge into a win-win scenario.`
  };
  
  const finalTranslation = intensityModifiers[intensity] || intensityModifiers.medium;
  
  res.json({
    sleepMessage: getSleepMessage('passiveAggressive'),
    original: message,
    translated: finalTranslation,
    intensity: intensity || 'medium',
    corporateFluffLevel: intensity === 'high' ? 'Maximum' : 'Moderate',
    effectivenessPrediction: "Recipient will understand you're annoyed but can't prove it.",
    timestamp: new Date().toISOString()
  });
});

// Buzzword Bingo API
app.get('/api/buzzword-bingo', async (req, res) => {
  await simulateProcessing();
  const { cardSize } = req.query;
  
  const buzzwords = [
    "Synergy", "Low-hanging fruit", "Circle back", "Touch base", "Deep dive",
    "Move the needle", "Paradigm shift", "Game changer", "Best practice", "Core competency",
    "Streamline", "Optimize", "Leverage", "Scalable", "Disruptive",
    "Action items", "Deliverables", "Stakeholder", "End-to-end", "Holistic",
    "Strategic", "Innovative", "Cutting-edge", "World-class", "Mission-critical",
    "Value proposition", "Return on investment", "Customer-centric", "Data-driven", "Agile",
    "Proactive", "Solution-oriented", "Results-driven", "Forward-thinking", "Next-generation"
  ];
  
  const size = parseInt(cardSize) || 5;
  const totalCells = size * size;
  const selectedBuzzwords = [];
  
  // Create bingo card
  for (let i = 0; i < totalCells; i++) {
    if (i === Math.floor(totalCells / 2)) {
      selectedBuzzwords.push("FREE SPACE");
    } else {
      const randomIndex = Math.floor(Math.random() * buzzwords.length);
      selectedBuzzwords.push(buzzwords[randomIndex]);
    }
  }
  
  // Create 2D array
  const card = [];
  for (let i = 0; i < size; i++) {
    card.push(selectedBuzzwords.slice(i * size, (i + 1) * size));
  }
  
  res.json({
    sleepMessage: getSleepMessage('buzzwordBingo'),
    bingoCard: card,
    cardSize: `${size}x${size}`,
    gameInstructions: "Check off buzzwords as you hear them in meetings. First to get a line wins!",
    winCondition: "Five in a row (horizontal, vertical, or diagonal)",
    prize: "The satisfaction of knowing you've survived another corporate meeting",
    bonusPoints: "Double points if someone says 'pivot' unironically",
    timestamp: new Date().toISOString()
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: "probably fine",
    energy_level: "meh",
    lastCoffee: "too long ago",
    existentialDread: "manageable",
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Life Utils API is probably running on port ${port}`);
  console.log(`Status: probably fine`);
  console.log(`Energy level: meh`);
});