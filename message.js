   const discord = require('discord.js');
    const fs = require('fs');
    const config = require('../config.json');
    //const msgs = require('../models/message.js');

    module.exports = {
      name: 'message',
      once: true,
      execute(client, message) {
        
        if (!message) return;
        if (message.channel.type === "dm") return;
        if (message.author.bot) return;
        if (message.content.indexOf(config.prefix) != 0) return;
      
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const cmd = client.commands.get(command);
    
      },
  };

