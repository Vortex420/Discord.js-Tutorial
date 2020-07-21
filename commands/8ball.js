module.exports = {
    name: '8ball',
    description: 'Ask a question and it responds with what it thinks',
    execute(message) {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let question = args.slice(1).join(" ");

        if(!question) return message.reply('You need to specify a question!');
        else {
            let answers = [
            'Yes',
            'No',
            'Maybe',
            'Of course!',
            'I don\'t know...',
        ];
            let response = answers[Math.floor(Math.random() * answers.length)];

            let embed = new Discord.MessageEmbed()
                .setTitle('8ball')
                .setColor(0x3d32fc)
                .addField('Question: ', question)
                .addField('Answer: ', response);
            message.channel.send(embed);

        }
    }
};