const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'admin',
    description: 'Xem Info Admin',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
            .setTitle(`\`${client.user.username}'s admin\``)
            .setDescription(`\`\`\`ini\n[ 🔽 Name : đặng quang huy ]\n\`\`\`
                             \`\`\`ini\n[ 💍 Age : 16 ]\n\`\`\`                                               
                             \`\`\`ini\n[ 📱 Phone : 0865129755 ]\n\`\`\`
                             \`\`\`ini\n[ 💒 City : hà nội ]\n\`\`\`
                             \`\`\`ini\n[ 👉 Hobbies : Listen to Music, Watch anime,.. ]\n\`\`\`
                             \`\`\`ini\n[ 💚 Crush Name : đéo có đkm ]\n\`\`\`
                             \`\`\`ini\n[ 🔗 Facebook  : Update.... ]\n\`\`\`
                             \`\`\`ini\n[ 📌 Github  : Update.... ]\n\`\`\`
                             \`\`\`ini\n[ 🎧 Music  : vì ngày hôm nay em cưới rồi.. ]\n\`\`\`



`)
            .setColor("RANDOM")
            .setFooter({ text: "© » Đặng quang huy" })
            .setTimestamp()
        interaction.reply({ embeds: [embed] });
    },
};