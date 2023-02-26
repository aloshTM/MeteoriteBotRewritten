import DiscordJS, { Intents, Interaction, Client, CommandInteraction, MessageEmbed } from 'discord.js'
import fetch from "node-fetch";
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

client.on('ready', () => {
  console.log('Logged in as Meteorite bot. Welcome!')
  
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

  const { commandName, options, createdAt } = interaction
  const baseurlFetch = 'http://mete0r.xyz/api/userinfo' // Uses userinfo as baseUrl, will have the ID when specified by the user
  const baseUrl = "https://mete0r.xyz/assets/userthumbnails"; // Uses userthumbnails to show the user's render
  const userInputFetch = interaction.options.data[0].value // Grabs what the user specified as ID and uses it for fetching user data
  const userInput = interaction.options.data[0].value // Grabs what the user specified as ID and uses it for grabbing the render
  const url = `${baseUrl}/${userInput}.png`; // Actual URL that gets displayed
  const urlFetch = `${baseurlFetch}/${userInputFetch}` // Fetched data gets displayed 
  const embed = new MessageEmbed()
  .setDescription(urlFetch)
  .setImage(url)
console.log(url); // Outputs: "https://example.com/12345"
console.log(getData) // Output should be what it fetched from userdata

async function getData() {
  try {
    const response = await fetch(urlFetch); // Make the GET request
    const data = await response.json(); // Gets the response data as a JSON
  } catch (error) {
    console.error(error);
  }
}

  if (commandName === 'lookupid') {
    const id = options.getNumber('id')!
    
    await interaction.reply({ 
      content: `${urlFetch} ${url}`
    })
  }
})

client.login(process.env.TOKEN)
