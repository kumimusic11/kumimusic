const axios = require("axios")
const urls = ["https://skitter-difficult-building.glitch.me"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 15 * 1000);
