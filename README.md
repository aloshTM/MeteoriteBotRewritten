# MeteoriteBotRewritten
mojave made a better one and im working on that one so this is open to anyone now (ignore my shit attempts to grab user data)

# Installation

To run this bot, you will need to install some dependencies 

- `npm init -y` is needed for base Node.JS projects
- `npm install discord.js dotenv` is needed for interacting with Discord's API via the bot and dotenv is for giving Discord our bots login information
- `npm install typescript ts-node` is needed for a little bit of the project

# Creating a bot application

You will need to [create a application](https://i.imgur.com/Uz7Z5Tr.png) in [Discord's Developer Portal](https://discord.com/developers/applications) and then [create a bot.](https://i.imgur.com/EmRs3OQ.mp4) Once you have created the bot, [copy the token](https://i.imgur.com/DRIAv3L.mp4), and save it. You will need it later.

# Rest of the setup

Download everything in the github repo, and place it where you installed your Node.JS dependencies. Go into .env file and replace `YOURTOKEN` in `TOKEN=` with the token you copied earlier. Run Windows Powershell (or cmd if that works for you) and find the project's folder. Run `ts-node index.ts` to start the bot locally.
