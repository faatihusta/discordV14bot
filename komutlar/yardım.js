const { EmbedBuilder } = require("discord.js");
const { prefix } = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  const embed = new EmbedBuilder()
    .setTitle("Yardım Komutları")
    .addFields(
      {
        name: ":card_box: Genel",
        value: "**fyardımgenel** Genel komutlar hakkında bilgi verir.",
        inline: true,
      },
      {
        name: ":stadium: Eğlence",
        value: "**fyardımeglence** Eğlence komutları hakkında bilgi verir.",
        inline: true,
      },
      {
        name: ":closed_lock_with_key: Sunucu",
        value: "**fyardımsunucu** Sunucu komutları hakkında bilgi verir.",
        inline: true,
      },
      {
        name: "\u200b",
        value: "\u200b",
        inline: true,
      },
      {
        name: ":shield: Moderasyon",
        value: "**fyardımmoderasyon** Sunucu komutları hakkında bilgi verir.",
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
  name: "yardım",
};

// \n\u200b
// \u200b

/* Fatih Usta */
