const Discord = require('discord.js');

// Initialize Discord Bot
const bot = new Discord.Client();

bot.on('ready', async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Hey, Wassup!`);
});

bot.on('message', msg => {
    msg.content.toLowerCase;
    if (msg.content.substring(0, 7) == 'nickbot' || msg.content.substring(0, 7) == 'Nickbot' ) {
      console.log(msg.content);
      var args = msg.content.substring(7).split(' ');
      var cmd = args[1];
       console.log(cmd);
        args = args.splice(7);
        switch(cmd) {
            // !ping
            case "hello":
                msg.reply("Hey!");
            break;
            //
            case "go home":
                msg.reply("lol no.");
            break;
            //
            case "do you love me?":
                msg.reply("I'm not here for commitment lol.");
            break;
         }
    } 
  
  if (msg.content.substring(0, 8) == 'nickbot?' || msg.content.substring(0, 8) == 'Nickbot?') {
      msg.reply('yes shister?');
    }
  });

bot.login(process.env.token);
