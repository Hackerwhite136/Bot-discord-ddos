const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'admin',
    description: 'Xem Info Admin 2',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
            .setTitle(`\`${client.user.username}'s admin\``)
            .setDescription(`\`\`\`ini\n[ 🔽 Name : Nguyễn đức ang ]\n\`\`\`
                             \`\`\`ini\n[ 💍 Age : 16 ]\n\`\`\`                                               
                             \`\`\`ini\n[ 📱 Phone : update.. ]\n\`\`\`
                             \`\`\`ini\n[ 💒 City : hà nội ]\n\`\`\`
                             \`\`\`ini\n[ 👉 Hobbies : Listen to Music, Watch anime,.. ]\n\`\`\`
                             \`\`\`ini\n[ 💚 Crush Name : update.. ]\n\`\`\`
                             \`\`\`ini\n[ 🔗 Facebook  : Update.... ]\n\`\`\`
                             \`\`\`ini\n[ 📌 Github  : Update.... ]\n\`\`\`
                             \`\`\`ini\n[ 🎧 Music  : update.. ]\n\`\`\`



`)
            .setColor("RANDOM")
            .setFooter({ text: "© » Đặng quang huy" })
            .setTimestamp()
        interaction.reply({ embeds: [embed] });
    },
};