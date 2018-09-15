var Discord = require('discord.io');
var logger = require('winston');


// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 7) == 'nickbot' || message.substring(0, 7) == 'Nickbot') {
    //     bot.sendMessage({
    //         to: channelID,
    //         message: 'DETECTED'
    //     });

        var args = message.substring(7).split(' ');
        var cmd = args[1];
       
        args = args.splice(7);
        switch(cmd) {
            // !ping
            case 'hello':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hey'
                });
            break;
            // Just add any case commands if you want to..
            console.log("");
         }
     }
});

bot.login(process.env.token);
