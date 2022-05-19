exports.run = async (client, message, args) => { 
    let discord = require("discord.js");
    //let { error, success } = require('../emoji.json')

    message.reply('Calculating ping...').then(resultMessage => {
        let ping = resultMessage.createdTimestamp - message.createdTimestamp
        console.log(ping)
        message.channel.send(`Ping Calculated! **BOT:** \`${ping}\` **API:** \`${client.ws.ping}\``)
    }) 
    

}

exports.help = {
    name: "ping",
    description: "Send the bot ping and latency",
    usage: ".ping",
    category: "Information",
    aliases: [".p"],
    example: ".ping",
    permission: ""
}; 
