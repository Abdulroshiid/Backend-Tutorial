const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`User ${name} with an id:${id}, received a response`);
});
customEmitter.on("response", () => {
  console.log(`Some other logic goes here!`);
});

customEmitter.emit("response", "Roshid", 73);
