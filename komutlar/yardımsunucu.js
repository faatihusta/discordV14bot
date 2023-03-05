const { EmbedBuilder } = require("discord.js");
const { prefix } = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  const embed = new EmbedBuilder()
    .setTitle("Sunucu Yardım Komutları")
    .addFields(
      {
        name: "Sunucu Bilgi",
        value: "**sunucubilgi** Sunucu hakkında bilgi verir",
        inline: true,
      },
      {
        name: "\u200b",
        value: "\u200b",
        inline: true,
      },
      {
        name: "\u200b",
        value: "\u200b",
        inline: true,
      },
      {
        name: "Emoji",
        value: "**emoji** Seçilen fotoğrafı sunucuya emoji olarak ekler",
        inline: true,
      }
    )

    .setColor("#007fff");

  message.channel.send({ embeds: [embed] });
};

exports.conf = {
  aliases: ["help"],
};

exports.help = {
  name: "yardımsunucu",
};

// \n\u200b
// \u200b

/* Fatih Usta */
