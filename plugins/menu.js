const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "📜",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*╭───────────◉◉►*
*│Hey, I'm 𝗗𝗔𝗥𝗞-𝗭𝗘𝗥𝗢-𝗠𝗗, Created By*
*│ᴅᴀʀᴋ ᴢᴇʀᴏ ᴛᴍ✨🍂*
*│*
*│I'm always here for help you.😇 Love │you forever ♥️*
*╰───────────◉◉►*

*╭───────────◎◎►*
│💻 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗠𝗲𝗻𝘂 💻
*│ ─────────*
*│►.song*
*│►.video*
*│►.fb*
*│►.tt*
*│►.mediafire*
*│►.twitter*
*│►.gdrive*
│─────────
│👾 𝗔𝗜 𝗠𝗲𝗻𝘂 👾
*│─────────*
*│►.ai*
*│►.gen (comming soon!)*
│─────────
│⛥ 𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂 ⛥
*│─────────*
*│►.restart*
│─────────
│💫 𝗠𝗔𝗜𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦💫
*│─────────*
*│►.menu*
*│►.alive*
*│►.ping*
*│►.repo*
*│►.owner*
*╰───────────◎◎►*
*©𝗗ᴀʀᴋ ᴢᴇʀᴏ-ᴍᴅ ʙʏ 𝗛𝗮𝗰𝗸𝗲𝗿 𝗧𝗠ッ*`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/938f552daff11c7f73378.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
