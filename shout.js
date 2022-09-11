const msg = prompt("What is your name?");
const shout = msg.toUpperCase();
const shoutMsg = `<h2>The message shout is ${shout}!!</h2>`;

document.querySelector('main').innerHTML = shoutMsg;