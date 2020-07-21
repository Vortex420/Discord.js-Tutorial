module.exports = {
	name: 'embed',
    description: 'Displays a nice embed!',
	execute(message) {
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed();

        let Example = "This my variable text!"

        embed.addField(`This is a nice Message Embed!`, `I can use a Variable inside of my embed! (${Example})`);
        embed.setFooter(`${message.author.username} | Tutorial embed`);
        embed.setColor(0xff5151);

        message.channel.send(embed);
	}
};