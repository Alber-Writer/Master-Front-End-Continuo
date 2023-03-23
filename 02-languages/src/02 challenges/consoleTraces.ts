/* consoleTraces */
console.log("------------consoleTraces------------");

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
  await delay(time);
  console.log(message);
};

const triggers = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"]),
];

const run = async (triggers) => {
  for (let index = 0; index < triggers.length; index++) {
    const element = triggers[index];
    await element()
  }
  console.log("first");
};

run(triggers);

// console.log("----------------------------------")