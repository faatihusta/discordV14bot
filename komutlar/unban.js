const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("BAN_MEMBERS"))
    return message.reply("Yetkin Yok!").catch((err) => {});

  let user = args[0];
  if (!user)
    return message
      .reply("Banı kaldırılacak kişiyi etiketlemelisin.")
      .catch((err) => {});

  message.guild.bans.fetch().then(async (bans) => {
    if (bans.size == 0) return;
    let bUser = bans.find((b) => b.user.id == user);
    if (!bUser)
      return message
        .reply({ content: "> :x: **Başarısız!** Kullanıcı yasaklı değil." })
        .catch((err) => {});

    await message.guild.members.unban(bUser.user);
    return message
      .reply({
        content: `\`${bUser.user.tag}\` kullanıcısının yasağı kaldırıldı.`,
      })
      .catch((err) => {});
  });
};
exports.conf = {
  aliases: [],
};

exports.help = {
  name: "unban",
};

/* Fatih Usta */
