const progress = require('progress');

let bar = new progress(':bar', { total: 100 });
let timer = setInterval( () => {
    bar.tick();
    if (bar.complete) {
        console.log('its done');
        clearInterval(timer);
    }
}, 100);
