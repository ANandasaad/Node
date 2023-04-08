
const fs= require('fs');
fs.writeFile('bio.txt','Hello Node js',(err)=>{
    if(err) throw err;
    console.log('file created successfully');

})

fs.appendFile('bio.txt','\t CURD Opertion',(err)=>{
    if(err) throw err;
    console.log("appended");
})

fs.rename('bio.txt','crud.txt',(err)=>{
    if(err) throw err;
    console.log("rename successfully");
})
fs.readFile('crud.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})

fs.unlink('crud.txt',(err)=>{
    if(err) throw err;
    console.log("deleted");
})

