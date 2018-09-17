const Discord = require('discord.js');

// Initialize Discord Bot
const bot = new Discord.Client();

bot.on('ready', async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Hey, BRUH!`);
});

//bot.on('guildMemberAdd', (member) => {
  //msg.reply("Welcome! Tell us about yourself, what languages do you use?");
//});

bot.on('message', msg => {
    let thisMessage = msg.content.toLowerCase();
    if (thisMessage.substring(0, 7) == 'nickbot') {
      
      console.log(thisMessage);
      var args = thisMessage.substring(7).split(' ');
      var cmd = args[1];
      
       if (args.length > 2) {
               console.log("Length > 2");
               var newString = "";
               for (i = 0; i < args.length; i++) { 
                   if (i == 1) {
                       newString = args[i]
                   } else {
                    newString += " " + args[i];
                   }
            }
             console.log(newString);
             cmd = newString;
           }
       
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
            //
            case "what do you do?":
                msg.reply("be a bot.");
            break;
            //
            case "do you hate anyone?":
                msg.reply("yeah Gabe.");
            break;
            //
            case "who is your idol?":
                msg.reply("GAGA.");
            break;
            //
            case "who is your bestfriend?":
                msg.reply("Meech and maybe sidknee idk.");
            break;
            //
            case "fight me":
                msg.reply("hit me I dare you.");
            break;
            //
            case "hey":
                msg.reply("hey girl!");
            break;
            //
            case "do you like biology?":
                msg.reply("what's that?");
            break;
            //
            case "who ur fave":
                msg.reply("none y'all.");
            break;
            //
            case "u suck":
                msg.reply("takes one to know one.");
            break;
            //
            case "you suck":
                msg.reply("takes one to know one.");
            break;
          default: 
            msg.reply(cmd);
            break;
         }
    } 
  
  if (msg.content.substring(0, 8) == 'nickbot?') {
      msg.reply('yes shister?');
    }
  });

bot.login(process.env.token);
