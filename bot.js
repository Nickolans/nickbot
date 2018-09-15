const Discord = require('discord.js');

// Initialize Discord Bot
const bot = new Discord.Client();

bot.on('ready', async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Hey, Wassup!`);
});

bot.on('message', msg => {
    msg.content.toLowerCase;
    if (msg.content.substring(0, 7) == 'nickbot') {
      var args = message.substring(7).split(' ');
      var cmd = args[1];
       
        args = args.splice(7);
        switch(cmd) {
            // !ping
            case 'hello':
                msg.reply('Hey!');
            break;
            // Just add any case commands if you want to..
         }
    } else if (msg.content.substring(0, 8) == 'nickbot?') {
      msg.reply('yes shister?');
    }
  });

bot.login(process.env.token);
