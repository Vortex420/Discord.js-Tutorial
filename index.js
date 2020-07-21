const Discord = require('discord.js');
const { token, prefix } = require('./config.json');
const fs = require('fs');
const client = new Discord.Client();

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}

client.on("ready", () => {
    client.user.setActivity(`${prefix} is my prefix.`);
    console.clear();
    console.log(`Loaded ${client.user.username}`);
});

client.on("message", async message => {
    if(message.content.startsWith(`${prefix}ping`)){
        const m = await message.channel.send("ping?");
        m.edit(`Latency is ${m.createdTimestamp - message.createdTimestamp}ms. \nUptime is ${Math.round(client.uptime)}ms`);
     }
});

client.on("message", message => {
    if(message.content.startsWith(`${prefix}prefix`))
    {
        client.commands.get('prefix').execute(message, prefix);
    }
    if(message.content.startsWith(`${prefix}help`))
    {
        client.commands.get('help').execute(message, prefix);
    }

    if(message.content.startsWith(`${prefix}embed`))
    {
        client.commands.get('embed').execute(message, prefix);
    }

    if(message.content.startsWith(`${prefix}8ball`))
    {
        client.commands.get('8ball').execute(message);
    }
});

client.login(token);