module.exports = {
  name: "loop",
  description: "LOOP THE QUEUE",
  execute (client, message, args) {
    
    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send("ANDA PERLU MENJADI DI SALURAN SUARA");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Tidak ada yang bisa saya putar");
    }
    
    //OOOOF
    serverQueue.loop = !serverQueue.loop
    
    
    
    message.channel.send(`Loop is now **${serverQueue.loop ? "Enabled" : "Disabled"}**`)
    
    
    
    
  }
}
