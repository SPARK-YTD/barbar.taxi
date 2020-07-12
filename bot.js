const http = require("http");
const express = require("express");
const app = express();
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://ytd-apply.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const moment = require('moment')
const client = new Discord.Client();
const prefix = "/";

client.on('ready', () => { //playing
    client.user.setGame(`/تقديم}	`,'https://www.twitch.tv/faresgameryt');
    client.user.setStatus('Online')
});


client.on("message", message => { //تقديم التاكسي
  if(message.content.startsWith("/تقديم")) {
        if(!message.channel.guild) return;
                if(message.author.bot) return;
        let channel = message.guild.channels.find("name", "🛃┋تــقـديـم-الـتـاكسي")
            if(!channel) return message.reply("**لانشاء روم التقديمات !!setsubmissions من فضلك اكتب الامر**")
            if(channel) {
            message.channel.send( message.member + '`1`').then( (m) =>{
              m.edit( message.member + ', الاسم الكريم ؟' )
              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
                  m.edit(message.member + '`2`').then( (m) =>{
                      m.edit( message.member + ', كم عمرك ؟' )
                      setTimeout(() => {
                        m.delete()
                      }, 4000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.member + '`3`').then( (m) =>{
                            m.edit( message.member + 'بورك اعلى من 120 لو اقل ؟ اذكر البور' )
                            setTimeout(() => {
                              m.delete()
                            }, 5000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.member + '`4`').then( (m) =>{
                                  m.edit( message.member + ', قرأت القوانين كامل ؟ !' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 5000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();
                                      var ask2 = m4.content;
                                      m4.delete();
                                      message.channel.send( message.member + '``5``').then( (m) =>{
                                        m.edit( message.member + ', تفاعلك في السيرفر ؟' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                      m.edit(message.member + ', Data is being sent').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.RichEmbed()
                          .setAuthor(message.author.username, message.author.avatarURL) 
                          .setColor('#c3cdff')
                        .setTitle(`\`تقديم طلب رتبة التاكسي\` \n  سوف يتم الرد عليك قريبا من الادارة انتظر , \n > ID: ${message.author.id}`)
                        .addField('> \`Name:\`', ` ** ${name} ** ` , true)
                        .addField('> \`Age:\`', ` ** ${age} ** ` , true)
                        .addField('> \`POWER:\`',`** ${ask} ** ` , true)
                        .addField('> \`Do you know all the laws:\` ',` ** ${ask2} ** ` , true)
                        .addField('> \`Duration your reaction: ?\`',` ** ${ask3} ** ` , true)
                        .addField('> __Your Account Created: __',` \`${message.author.createdAt} \` ` , true)
                        channel.send(embed)
                        }, 2500);
                        setTimeout(() => {
                          mtime.delete()
                        }, 4000);

                  })
                })
                })
              })
            })
          })
        })
        })
              })
          })
        })
    }
}
        });
        client.on('message',async message => {
          let mention = message.mentions.members.first();
          if(message.content.startsWith("/مقبول")) {
          if(!message.channel.guild) return;
          let acRoom = message.guild.channels.find('name', '✅┋قـــائــمـة-الــقـبــول');
          if(!message.guild.member(message.author).hasPermission("VIEW_AUDIT_LOG")) return;
          if(!mention) return message.reply("Please Mention");
         
          acRoom.send(`
> :oncoming_taxi: __Taxi مبروك تم قبولك كعضو في الـ__
> :taxi: : __سيتم التواصل معك من قبل الليدر تاكسي لاختبارك في مهمة عشوائية لاستلام الرتبة__
> __وشكراً لك__
\n ${mention} Taxi <a:146:691400122239811684> 

>   `)
          }
        });

client.on('message',async message => {
  let mention = message.mentions.members.first();
  if(message.content.startsWith("/مرفوض")) {
  if(!message.channel.guild) return;
  let acRoom = message.guild.channels.find('name', '✅┋قـــائــمـة-الــقـبــول');
  if(!message.guild.member(message.author).hasPermission("VIEW_AUDIT_LOG")) return;
  if(!mention) return message.reply("Please Mention");
 
  acRoom.send(`> نعتذر منك تم رفضك :47: الرجاء المحاولة في وقت أخر شكرا \n ${mention} - :pleading_face: `)
  }
});

client.login(process.env.BOT_TOKEN);
