const os=require('os');

const arch=os.arch();
console.log(arch);
console.log(os.type());
console.log(os.hostname());
const freemem=os.freemem();
console.log(`${freemem  /1024 /1024} `);
console.log(os.platform());

