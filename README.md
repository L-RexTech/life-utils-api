# Life Utils API 🤯

*Because adulting is hard and APIs should be honest about it*

## What is this?

Life Utils API is a collection of hilariously useful APIs that solve real problems people have every day. It's hosted on Render's free tier and proudly embraces the 30-second cold start as part of the user experience.

## Features

### 🤯 Overthinking Detector
- Analyzes your text messages for overthinking patterns
- Counts qualifiers, question marks, and general analysis paralysis
- Suggests whether you should just send the damn message

### 🌱 Plant Death Detector  
- Brutally honest assessment of your plant's will to live
- Analyzes descriptions and watering patterns
- Provides funeral planning services (figuratively)

### 🌡️ HTTP Status Feelings
- Converts your current life status to HTTP codes
- Maps human emotions to technical difficulties
- Error 418: I'm a teapot having an existential crisis

### ⏰ Procrastination Justifier
- Scientific-sounding reasons why delaying is smart
- Calculates panic levels based on deadlines
- Rebrands procrastination as "strategic delayed execution"

### 💬 Small Talk Emergency
- Context-aware conversation starters
- Never suffer through elevator silence again
- Includes exit strategies for failed small talk attempts

### 🛏️ Bed Worthiness Calculator
- Scientific analysis of whether today is worth getting up for
- Factors in weather, mood, energy, and responsibilities
- Philosophy: "Bed is always there for you. Responsibilities are temporary."

### 😊 Passive Aggressive Translator
- Converts direct thoughts into corporate-friendly speak
- Multiple intensity levels from subtle to corporate overload
- Translates "This is broken" to "exploring alternative approaches to this delightful challenge"

### 🎯 Buzzword Bingo
- Generates corporate buzzword bingo cards
- Customizable card sizes for different meeting lengths
- Bonus points for unironic use of "pivot"

## API Endpoints

All endpoints embrace the sleep and include loading messages like:
- "Waking up the overthinking detector..."
- "API went dormant like your succulent..."
- "Currently procrastinating on your procrastination..."

### Base URL
```
https://life-utils-api.onrender.com/api/
```

### Endpoints
- `POST /api/overthinking` - Analyze text for overthinking
- `POST /api/plant-death-detector` - Check plant status
- `GET /api/status-feelings` - Get HTTP status for your mood
- `POST /api/procrastination-justify` - Justify your procrastination
- `GET /api/small-talk` - Generate conversation starters
- `GET /api/bed-worthiness` - Calculate if today is worth it
- `POST /api/passive-aggressive` - Translate to corporate speak
- `GET /api/buzzword-bingo` - Generate bingo cards
- `GET /api/wake-up` - Wake up the API (placebo effect only)

## The Sleep Experience

This API runs on Render's free tier, which means it sleeps after 15 minutes of inactivity. Instead of fighting this limitation, we've made it part of the brand:

- 30+ second cold starts with entertaining loading messages
- Different sleep messages for each API endpoint
- Status page: "All systems sleeping peacefully"
- Health check returns: `{"status": "probably fine", "energy_level": "meh"}`

## Tech Stack

- **Backend**: Node.js + Express (minimal and lightweight)
- **Database**: None (we believe in living dangerously)
- **Hosting**: Render Free Tier (sleeping beautifully)
- **Frontend**: Vanilla HTML/CSS/JS (because we're keeping it simple)

## Local Development

```bash
git clone https://github.com/L-RexTech/life-utils-api.git
cd life-utils-api
npm install
npm start
```

Visit `http://localhost:3000` to see the API in action.

## Deployment to Render

1. Connect your GitHub repo to Render
2. Create a new Web Service
3. Use these settings:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (obviously)
4. Deploy and wait for it to sleep

## Contributing

Found a bug? That's not a bug, that's a feature reflecting the chaos of modern life.

Want to add a new API? Make sure it:
- Solves a real but ridiculous problem
- Has appropriately sarcastic error messages
- Embraces the absurdity of existence
- Works well with the sleep experience

## License

MIT - Use it, abuse it, let it sleep peacefully.

## Disclaimer

This API may not actually solve your life problems, but it will make you laugh about them. Response times are "whenever we feel like it" and that's part of the charm.

---

*"The most relatable API ever built"* - Someone, probably