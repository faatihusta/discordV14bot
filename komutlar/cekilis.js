const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let mesaj = args.slice(0).join(" ");
  if (!mesaj) return message.reply("Çekilişin ödülü yokmu?");

  let sonuç = message.guild.members.cache.filter((q) => !q.user.bot).random();
  let endEmbed = new Discord.EmbedBuilder()
    .setTitle("🎉Çekiliş🎉")
    .setColor("White")
    .setDescription(`Ödül : **${mesaj}** \n\n Kazanan : **${sonuç}**`)
    .setThumbnail(message.guild.iconURL())
    .setFooter({ text: `Başlatan : ${message.author.tag}` });
  message.delete();
  message.channel.send({ content: `${sonuç}`, embeds: [endEmbed] });
};
exports.conf = {
  aliases: ["cekilis"],
};

exports.help = {
  name: "promotion",
};

/* Fatih Usta */
