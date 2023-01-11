const Discord = require("discord.js");
const client = new Discord.Client();

client.login("ODUxNTI2Njk3NjAyMTIxNzY5.YL5kCQ.lTe72Q9HmMmz56zWkfzpgVhOKIA");

client.on("message", (message) => {
    if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

    if (message.mentions.has(client.user.id)) {
        members = message.guild.members;
        max = message.guild.memberCount;
        min = 0;
        random = Math.floor(Math.random() * max) + min;
        counter = 0;
        // members.id.forEach(element => {
        //     if (counter == random) {
        //         if (!element.user.bot) {
        //             user = element.id;
        //             console.log("yes user !");
        //         }
        //         console.log("no bot !");
        //     }
        //     counter++;
        // });
        // if (typeof user !== 'undefined') {
        //     message.channel.send("J'ai choisi de ping <@" + user + "> !");
        // } else {
        //     message.channel.send("Malheureusement je suis tombé sur un bot or je n'ai pas le droit de les mentionner !");
        // }
        console.log(Object.values(members).keys());
    };
});

client.on("ready", () => {
    console.log("@Someone is ready !");
});