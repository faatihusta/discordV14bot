const { EmbedBuilder } = require("discord.js");
const { prefix } = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  const embed = new EmbedBuilder()
    .setTitle("Eğlence Yardım Komutları")
    .addFields(
      {
        name: "BAN",
        value: "**ban** etiketlenen kişiyi banlar",
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
        name: "UNBAN",
        value: "**unban** Banlanan kişinin banını açar.",
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
      }
    )

    .setColor("#007fff");

  message.channel.send({ embeds: [embed] });
};

exports.conf = {
  aliases: ["help"],
};

exports.help = {
  name: "yardımmoderasyon",
};

// \n\u200b
// \u200b

/* Fatih Usta */
