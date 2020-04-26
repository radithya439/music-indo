module.exports = {
  name: "skip",
  description: "Skip the song or shift song to next",
  execute(client, message, args) {
    const { channel } = message.member.voice;

    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send("ANDA PERLU MENJADI DI SALURAN SUARA");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Tidak ada permainan yang bisa saya lewati");
    }

    serverQueue.connection.dispatcher.end();
    message.channel.send("✔ | Melompati Lagu");
  }
};
