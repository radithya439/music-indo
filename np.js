module.exports = {
  name: "np",
  description: "send the name of on going song",
  execute (client, message, args) {
    
      const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send("ANDA PERLU MENJADI DI SALURAN SUARA");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Bot tidak memainkan apa pun");
    }
    
    message.channel.send(serverQueue.songs[0].title)

    
    
    
  }
}
