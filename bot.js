const Discord = require("discord.js");

// Initialize Discord Bot
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

bot.on('message', msg => {
  
  msg.toLowerCase;
  if (msg.substring(0, 7) == 'nickbot') {
    var args = msg.substring(7).split(' ');
        var cmd = args[1];
       
        //args = args.splice(7);
        switch(cmd) {
            // !ping
            case 'hello':
                msg.reply('Hey!');
            break;
            // Just add any case commands if you want to..
         }
  } else if (msg.substring(0, 8) == 'nickbot?') {
       msg.reply('Yes shister?');
     }

});

bot.login(process.env.token);
