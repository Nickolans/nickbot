var Discord = require('discord.io');

// Initialize Discord Bot
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Hey, BRUH!`);
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 7) == 'nickbot' || message.substring(0, 7) == 'Nickbot') {

        var args = message.substring(7).split(' ');
        var cmd = args[1];
       
        //args = args.splice(7);
        switch(cmd) {
            // !ping
            case 'hello':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hey'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});

bot.login(process.env.token);
