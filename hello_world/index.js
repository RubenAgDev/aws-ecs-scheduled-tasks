// const AWS = require("aws-sdk");
// const ECS = new AWS.ECS({
//     region: "us-east-1"
// });

const WAITING_TIME_MS = 120000;

const exitWithGoodBye = () => {
    console.log("Good bye World!");
};

process.on("exit", exitWithGoodBye);

console.log("Hello World!");

setTimeout(() => {
    console.log(`Waited ${WAITING_TIME_MS} ms...`);
}, WAITING_TIME_MS);

// ECS.stopTask({
//     task: "hello-world-task",
//     cluster: "music-licensing",
//     reason: "Event has ended"
// }, (error, data) => {
//     if(error) {
//         console.error(error);
//     } else {
//         console.log(data);
//     }
// });
