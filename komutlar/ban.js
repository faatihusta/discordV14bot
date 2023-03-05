exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("0x0000000000000004"))
    return message
      .reply({ content: "> :x: **Başarısız!** Ban yetkin yok dostum." })
      .catch((err) => {});

  let me = message.guild.members.cache.get(client.user.id);
  if (!me.permissions.has("0x0000000000000004"))
    return message
      .reply({
        content: "> :x: **Başarısız!** Benim ban yetkim yok loooooooooooooo",
      })
      .catch((err) => {});

  let sebep = args.slice(1).join(" ") || "Belirtilmemiş";
  let member =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);

  if (!member)
    return message
      .reply({
        content: "> :x: **Başarısız!** Bir kullanıcı etiketlemen gerek",
      })
      .catch((err) => {});

  if (message.guild.ownerId === member.id)
    return message
      .reply({
        content: "> :x: **Başarısız!** Sunucu sahibini banlayamazsın",
      })
      .catch((err) => {});
  if (message.author.id === member.id)
    return message
      .reply({
        content: "> :x: **Başarısız!** kendini banllayamazsın",
      })
      .catch((err) => {});
  if (client.user.id === member.id)
    return message
      .reply({ content: "> :x: **Başarısız!** Beni mi banlıyacaksın :(" })
      .catch((err) => {});

  if (message.guild.ownerId !== message.author.id) {
    if (member.roles.highest.position >= message.member.roles.highest.position)
      return message
        .reply({
          content: "> :x: **Başarısız!** yetersiz rol",
        })
        .catch((err) => {});
  }

  if (member.roles.highest.position >= me.roles.highest.position)
    return message
      .reply({
        content: "> :x: **Başarısız!** rolum yetersiz",
      })
      .catch((err) => {});

  message.guild.members
    .ban(member, {
      reason: `By: ${message.author.tag} Reason: ` + sebep || "Belirtilmemiş",
    })
    .then(() => {
      message.reply({
        content: `> ✅ **Başarılı!** Kullanıcı başarıyla sunucudan banlandı!`,
      });
    })
    .catch((e) => {
      message
        .reply({
          content: `> :x: **Başarısız!** Kullanıcıyı sunucudan banlarken hata aldım. \n**Hata:** \`\`\`${
            e.name + ": " + e.message
          }\`\`\``,
        })
        .catch((err) => {});
    });
};
exports.conf = {
  aliases: [],
};

exports.help = {
  name: "ban",
};

/* Fatih Usta */
