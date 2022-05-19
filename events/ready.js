module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);

        function randomStatus() {
            let status = ["play.vanquil.com", ".help"]
            let rstatus = Math.floor(Math.random() * status.length);
            client.user.setActivity(status[rstatus], { type: "WATCHING" });
    
        }; setInterval(randomStatus, 15000)
    
    },
};