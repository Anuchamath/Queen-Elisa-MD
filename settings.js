/*
 █▀▀█ █░▒█ █▀▀▀ █▀▀▀ █▄░▒█       █▀▀▀ █░░░ ▀█▀ █▀▀▀█ █▀▀█      
 █░▒█ █░▒█ █▀▀▀ █▀▀▀ █▒█▒█       █▀▀▀ █░░░ ░█░ ▀▀▀▄▄ █▄▄█      
 ▀▀█▄ ▀▄▄▀ █▄▄▄ █▄▄▄ █░░▀█       █▄▄▄ █▄▄█ ▄█▄ █▄▄▄█ █░▒█      


 █░░▒█   ▄█░
 ▒█▒█░   ░█░
 ░▀▄▀░   ▄█▄
 
 𝙌𝙪𝙚𝙚𝙣 𝙀𝙡𝙞𝙨𝙖 𝙈𝘿 𝘽𝙮 𝘿𝙖𝙧𝙠 𝙈𝙖𝙠𝙚𝙧 
 𝙋𝙪𝙗𝙡𝙞𝙘 𝘿𝙖𝙩𝙚 - 2022 / 07 / 03 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤 𝙎𝙘𝙧𝙞𝙥𝙩 𝙁𝙧𝙤 𝙂𝙤𝙟𝙤 𝙎𝙖𝙩𝙤𝙧𝙪
 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤
           𝘼𝙡𝙡 𝙃𝙚𝙡𝙥𝙚𝙧𝙨 💞
*/



const fs = require('fs')
const chalk = require('chalk')

//global api
global.fbapi = 'dd79-1aeb-21a3' // Facebook download 2 api

global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//other
global.owner = ['94770267442'] // Owner number , (අයිතිකරුගේ නම්බර් එක )
global.pemilik = ['94770267442'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['94770267442'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = '☘Anu☘' // Your name ඔබේ නම 
global.botnma = '☘Anusha☘' // Your bot name , ඔබගෙ බොට්ගේ නම 
global.ownernma = '😇𝓐𝓝𝓤𝓒𝓗𝓐𝓜𝓐𝓣𝓗 𝓼𝓪𝓽𝓱𝓼𝓪𝓻𝓪😇' //ownernama,ownername
global.packname = '☘𝓐𝓝𝓤𝓢𝓗𝓐☘' // Sticker package name 
global.author = '☘𝓐𝓝𝓤𝓢𝓗𝓐☘' // Sticker Autor name 
global.sessionName = 'session'
global.prefa = ['#','!','/',''] 
global.sp = '🔵'
// Alive massage , `-------------------------------------------------------

☘A░N░U░S░H░A░ B░O░T░☘

  * 𝓬𝓸𝓶𝓪𝓷𝓭 *

ᶠᵒʳ ᵐᵒʳᵉ ⁱᵐᶠᵒʳᵐᵃᵗⁱᵒⁿ ˢᵉⁿᵈ *.menu*

. song [ yt link ]

. video [ yt link ]

.song [ song name ]

 .sticker [ photo or video ]

https://chat.whatsapp.com/BR6TrmmlCinB2BkfcwwWpb

⛔⛓Discipline No. 01🤝*

*⛔Do not inappropriate chat🗒️*

*⛔No Link / Inbox Forbidden📥*

*⛔Inactive members will be removed🗑️*

*⛔Do not disturb other members🕯️*

*⛔Respect everyone🥰*

*⛔No SEX or Porn🔞*

*⛔Do not give many commands for one long⚠️* ´
global.alivelogo = `https://telegra.ph/file/1a2dee71baa975091620d.jpg`
global.alive =`Hello i am alive now

Download song type .yt 
Thanks fro using...`
// Welcome massage 
global.welcome = `
-------------------------------------------------------

☘A░N░U░S░H░A░ B░O░T░☘

  * 𝓬𝓸𝓶𝓪𝓷𝓭 *

ᶠᵒʳ ᵐᵒʳᵉ ⁱᵐᶠᵒʳᵐᵃᵗⁱᵒⁿ ˢᵉⁿᵈ *.menu*

. song [ yt link ]

. video [ yt link ]

.song [ song name ]

 .sticker [ photo or video ]

https://chat.whatsapp.com/BR6TrmmlCinB2BkfcwwWpb

⛔⛓Discipline No. 01🤝*

*⛔Do not inappropriate chat🗒️*

*⛔No Link / Inbox Forbidden📥*

*⛔Inactive members will be removed🗑️*

*⛔Do not disturb other members🕯️*

*⛔Respect everyone🥰*

*⛔No SEX or Porn🔞*

*⛔Do not give many commands for one long⚠️*
`
// වෙල්කම් එක යවන්න ඔනි නම් add කියලා දාන්න 
global.sendwelcome = `add`
// Good bye එක ඔනි නම් remove කියලා දාන්න
global.sendgoodbye = `remove`
// Caption 
global.cap = `©☘𝓐𝓝𝓤𝓢𝓗𝓠☘`
global.mess = {
    success: '✅ Done!',
    admin: 'you must be admin to use this cmd!',
    botAdmin: 'Bot must be admin neh!',
    owner: 'This cmd is for Elisa bot owner only',
    group: 'oooh sorry this cmd is for groups only!',
    private: 'goossssh it can only used in dms!',
    bot: 'This cmd  its only for the bot host',
    wait: 'Wait Elisa bot processing ',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    

global.thumb = fs.readFileSync('./image/Elisa.jpg')
global.imgalive = fs.readFileSync('./image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
