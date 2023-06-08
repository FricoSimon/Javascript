import timers from 'timers/promises';

// console.log(new Date());
// await timers.setTimeout((5000));
// console.log(new Date());

for await (const start of timers.setInterval((3000), 'ignored')) {
    console.log(new Date());
}