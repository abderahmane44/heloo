const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
 
});
 

var PrEfix = "+";
client.on('message', message => {
  if (!message.content.startsWith(PrEfix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== '537147937583529994') return;
if (message.content.startsWith(PrEfix + 'wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**✅  : ${argresult}**`)
} else 
if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send("**:white_check_mark: | The Playing Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else  
if (message.content.startsWith(PrEfix + 'ls')) {
client.user.setActivity(argresult, {type:'LISTENING'});
    message.channel.sendMessage(`**✅  : ${argresult}**`)
} else 
if (message.content.startsWith(PrEfix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/amira");
    message.channel.sendMessage(`**✅  : ${argresult}**`)
}

});


client.on('message', message => {
if(message.content.startsWith('c')) {
if(message.author.id !== '538349275713634315') return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});

client.on('message', message => {
if(message.content.startsWith('c')) {
if(message.author.id !== '538349275713634315') return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});


client.login(process.env.BOT_TOKEN);
