const Discord = require("discord.js");

// Initialize Discord Bot
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Hey, BRUH!`);
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    message.toLowerCase;
    if (message.substring(0, 7) == 'nickbot') {

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
     } else if (message.substring(0, 8) == 'nickbot?') {
       bot.sendMessage({
            to: channelID,
            message: 'Yes shister??'
        });
     }
});

bot.login(process.env.token);
