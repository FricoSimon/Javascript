import os from "os" //import os

const uptimeToMinutes = (sec) => sec / 60;
const convertUptime = uptimeToMinutes(os.uptime());
const minutes = parseInt(convertUptime.toFixed(2));

console.log("Hostname: " + os.hostname())
console.log("OS Type: " + os.type())
console.log("OS Version: " + os.version())
console.log("Platform: " + os.platform() + " bit")
console.log("Architecture: " + os.arch())
console.log("Machine: " + os.machine())
console.log("System Uptime: " + minutes + " Minutes")
//console.info(os.networkInterfaces())
console.table(os.cpus())





