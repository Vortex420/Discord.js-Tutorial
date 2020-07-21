const prefix = require('./prefix');

module.exports = {
	name: 'help',
    description: 'Specifies every command available',
	execute(message, prefix) {
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed();
        embed.addField(`prefix`, `Displays the current prefix`);
        embed.addField(`ping`, `Shows the bots uptime an ping`);
        embed.addField(`8ball`, `Ask a question and it responds with what it thinks`);
        embed.setFooter(`Bot prefix is ${prefix}`);
        embed.setColor(0x00ff00);
        message.channel.send(embed);
	}
};