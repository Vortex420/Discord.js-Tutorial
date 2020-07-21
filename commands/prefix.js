module.exports = {
	name: 'prefix',
    description: 'Description',
	execute(message, prefix) {
        message.channel.send(`My prefix is\n(${prefix})`);
	}
};