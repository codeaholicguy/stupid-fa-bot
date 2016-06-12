const Botkit = require('botkit')

const controller = Botkit.slackbot()

controller.spawn({
  token: process.env.token,
}).startRTM()

controller.hears('.*', ['direct_mention'], (bot, message) => {
  bot.reply(message, `echo ${message.text}`)
})
