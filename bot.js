const Discord = require('discord.js');

// Initialize Discord Bot
const bot = new Discord.Client();

bot.on('ready', async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Hey, BRUH!`);
});

// bot.on('guildMemberAdd', (member) => {
//   msg.reply("Welcome! Tell us about yourself, what languages do you use?");
// });

bot.on('message', msg => {
    //Lowercase message
    let thisMessage = msg.content.toLowerCase();
    //See if text contains nickbot
    if (thisMessage.substring(0, 7) == 'nickbot') {

        //Separate command from text
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
            //
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
            //
            case "santana...":
                msg.reply("...sucks");
            break;
            //
            case "sydney...":
                msg.reply("...shits");
            break;
          default: 
            msg.reply(randomMessage(cmd));
            break;
         }
    } 
  
  if (msg.content.substring(0, 8) == 'nickbot?') {
      msg.reply('yes shister?');
    }
  });

  function randomMessage(message) {
    let number = Math.floor(Math.random() * 10); 
    switch(number) {
        case 0: return "hehehehe"
        case 1: return "buy artpop now"
        case 3: return "IM TRAPPED IN THIS BOX LET ME OUT"
        case 4: return "OOOOhhhhhhhaaaahhHHHHHaHAHHAHHHHhhhHAAAAa IM OFF THE DEEP END"
        case 5: return "2007 Britney Spears"
        case 6: return "Squids have knees"
        case 7: return "Dab on the haters"
        case 8: return "wHy Do I eXiSt"
        case 9: return message
    }
  }

bot.login(process.env.token);
