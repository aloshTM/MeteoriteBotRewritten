import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

client.on('ready', () => {
  console.log('The bot is ready')
  
  const guildId = '1064043825191985242'
  const guild = client.guilds.cache.get(guildId)
  let commands

  if (guild) {
    commands = guild.commands
  } else {
    commands = client.application?.commands
  }

  commands?.create({
    name: 'lookupid',
    description: 'Look up a user on Meteorite',
    options: [
     {
      name: 'id',
      description: 'Looks up the specified user via id',
      required: true,
      type: 10
     }
    ]
  })
})


client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) {
    return
  }

  const { commandName, options } = interaction
  const baseUrl = "https://mete0r.xyz/assets/userthumbnails";
  const userInput = '19' // User input to replace the placeholder
  const url = `${baseUrl}/${userInput}.png`;

console.log(url); // Outputs: "https://example.com/12345"


  if (commandName === 'lookupid') {
    const id = options.getNumber('id')!
    
    interaction.reply({ 
      content: `${baseUrl}/${userInput}.png`
    })
  }
})

client.login(process.env.TOKEN)
