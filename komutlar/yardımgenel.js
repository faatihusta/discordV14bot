const { EmbedBuilder } = require("discord.js");
const { prefix } = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  const embed = new EmbedBuilder()
    .setTitle("Genel Yardım Komutları")
    .addFields(
      {
        name: "Avatar",
        value: "**avatar @user** Etiketlenen kisinin avatarını atar",
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
        name: "Çekiliş",
        value: "**cekilis** Sunucuda çekiliş yapar",
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
  name: "yardımgenel",
};

// \n\u200b
// \u200b

/* Fatih Usta */
