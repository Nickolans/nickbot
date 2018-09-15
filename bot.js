const Discord = require("discord.js");

// Initialize Discord Bot
const bot = new Discord.Client();

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Hey, Wassup!`);
});

bot.on("message", async message => {
  
  message.toLowerCase;
  if (message.substring(0, 7) == "nickbot") {
    var args = message.substring(7).split(' ');
        var cmd = args[1];
        switch(cmd) {
            // !ping
            case 'hello':
                message.channel.send("Hey!");
            break;
            // Just add any case commands if you want to..
         }
  } else if (message.substring(0, 8) == "nickbot?") {
       message.channel.send("Yes shister?");
     }

});

bot.login(process.env.token);
