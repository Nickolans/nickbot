const Discord = require('discord.js');

// Initialize Discord Bot
const bot = new Discord.Client();

bot.on('ready', async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Hey, Wassup!`);
});

bot.on('message', msg => {
    //msg.toLowerCase;
    if (msg.content == 'nickbot') {
      msg.reply('pong');
    }
  });

bot.login(process.env.token);
