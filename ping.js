//FIRST TEST HANDLER IS WORKING OR NOT
module.exports = {
  name: "ping",
  description: "Pinging the bot",
  execute(client, message) {
  message.channel.send(':ping_pong: | **PONG**
:ping_pong: | **PING**'  **${client.ws.ping})
    
}
}
