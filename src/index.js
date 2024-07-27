require('dotenv').config();

const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.username} is online`);
})

client.on('messageCreate', (message) => {
    if (message.content.slice(0,31) === 'https://www.instagram.com/reels') {
        const url_len = message.content.length;
        sliced = message.content.slice(0, 12);
        sliced2 = message.content.slice(12, url_len);
        message.channel.send(sliced + 'dd' + sliced2);

        
    }
})

client.login(process.env.TOKEN);
