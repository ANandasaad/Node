
const fs=require('fs');
// fs.mkdirSync('Nodefile');

fs.writeFileSync('./Nodefile/bio.txt',"I am loving Node.js");
fs.appendFileSync('./Nodefile/bio.txt','  File System Module');
const buf=fs.readFileSync('./Nodefile/bio.txt','utf8');
console.log(buf);
// fs.renameSync('./Nodefile/bio.txt','mybio.txt');
fs.unlinkSync('mybio.txt');
fs.mkdirSync('NodeFile');