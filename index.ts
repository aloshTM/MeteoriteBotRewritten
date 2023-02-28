import DiscordJS, { Intents, Interaction, Client, CommandInteraction, MessageEmbed } from 'discord.js' // literally what the bot is made from. you need this to run it
import fetch from "node-fetch"; // for grabbing stuff from the api
import dotenv from 'dotenv' // token crap
dotenv.config() // idk

const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES], // discord added intents due to security reasons idk but i have to specify this or i wont be able to send messages
})

client.on('ready', () => {
  console.log('Logged in as Meteorite bot. Welcome!') // allows you to use the bot
  
  const guildId = '1064043825191985242'
  const guild = client.guilds.cache.get(guildId)
  let commands

  if (guild) {
    commands = guild.commands // creates the commands in the guild
  } else {
    commands = client.application?.commands // global commands (never happening?)
  }

  
  commands?.create({
    name: 'me',
    description: 'If you have linked your discord, this command shows what you looked like on site'
  })
  commands?.create({ // creates the command
    name: 'lookupid',
    description: 'This command helps you look up a user on Meteorite', // explaining to dumbasses what the command does (is the name not enough?)
    options: [ // makes it so you can input a number
     {
      name: 'id', // id
      description: 'Looks up the specified user via id', // d
      required: true, // well of course you need to search a ID or the bot will crash
      type: 10 // makes it so you can only put a number no letters or symbols
     }
    ]
  })
})


client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) {
    return
  }

  const { commandName, options, createdAt } = interaction // libraries
  const baseurlFetch = 'http://mete0r.xyz/api/userinfo' // Uses userinfo as baseUrl, will have the ID when specified by the user
  const baseUrl = "https://mete0r.xyz/assets/userthumbnails"; // Uses userthumbnails to show the user's render
  const userInputFetch = interaction.options.data[0].value // Grabs what the user specified as ID and uses it for fetching user data
  const userInput = interaction.options.data[0].value // Grabs what the user specified as ID and uses it for grabbing the render
  const url = `${baseUrl}/${userInput}.png`; // Actual URL that gets displayed
  const urlFetch = `${baseurlFetch}/${userInputFetch}` // Fetched data gets displayed 
  const thumbnail = `https://cdn.discordapp.com/attachments/1003775108835463298/1079535534147387522/logosmall.png`
console.log(url); // Outputs: "https://example.com/12345"
console.log(getData) // Output should be what it fetched from userdata

async function getData() {
  try {
    const response = await fetch(urlFetch); // Make the GET request
    const data = await response.json(); // Gets the response data as a JSON
  } catch (error) { // error debugging
    console.error(error); // error debugging
  }
}

fetch(`${urlFetch}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Use the response data here
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

 
if (commandName === 'lookupid' ) {
    const id = options.getNumber('id') // finds what the user inputted in the ID option and sets that as the render and author
    const IDembed = new MessageEmbed() // embed to make it look cleaner
    .setAuthor('Here is the user you looked up')! // hi
    .setTitle(`This is user id ${id}`)! // says what ID the user looked up
    .setColor('#0099ff') // Cosemtic
    .setFooter('This bot was rewritten by alosh#1337. Original idea made by MojaveMF#2577.') // Credits
    .setImage(`${url}`) // Sets the image as the render
    .setThumbnail(`${thumbnail}`)
    .setFields(
      { name: 'Creation Date', value: 'placeholeder' }, // placeholder
      { name: 'Creation Date', value: 'placeholeder' }, // placeholder
      { name: 'Creation Date', value: 'placeholeder' }, // placeholder 
    )
    .setTimestamp(); // idk why i added this but im keeping
} else if (commandName === 'me') {    
    const meembed = new MessageEmbed() // embed to make it look cleaner
    .setAuthor('Here is what you look like')! // hi
    .setTitle(`This is you!`)! // says what ID the user looked up
    .setColor('#0099ff') // Cosemtic
    .setFooter('This bot was rewritten by alosh#1337. Original idea made by MojaveMF#2577.') // Credits
    .setImage(`${url}`) // Sets the image as the render
    .setThumbnail(`${thumbnail}`)
    .setFields(
      { name: 'Creation Date', value: 'placeholeder' }, // placeholder
      { name: 'Creation Date', value: 'placeholeder' }, // placeholder
      { name: 'Creation Date', value: 'placeholeder' }, // placeholder 
    )
    .setTimestamp(); // idk why i added this but im keeping
  
    
    // await interaction.reply({ embeds: [] }); // actually sends the embed with all the info
  // broken currently cba to fix it but if anyone wants to make a PR to fix it then go ahead
    await interaction.reply({ embeds: [meembed] }); // actually sends the embed with all the info
   }
  });

client.login(process.env.TOKEN) // login as bot
