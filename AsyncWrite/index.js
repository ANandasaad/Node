// const fs= require('fs');

// fs.writeFile('bio.txt',"Today is awesome day",(err)=>{
//     if(err) throw err;
//     console.log('file is created');
   
// });


// fs.appendFile('bio.txt',"Loving js",(err)=>{
//     if(err) throw err;
//     console.log('append file successfully')
// })

// fs.readFile('./bio.txt','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })


// fs.unlink('bio.txt',(err)=>{
//     if(err) throw err;
//   console.log('delete');

// })

import {writeFile,unlink,appendFile,readFile} from 'node:fs/promises';


try{
  await writeFile('bio.txt',"Hi my Name is Anand");
  console.log('file created')
}
catch(error){
   console.error("throw err",error);


}


// try{
//   await appendFile('bio.txt','\t Loving Node js');
//   console.log('append file');
// }
// catch(error){
//     console.error('throw error',error);
// }

try{
    const data=await readFile('bio.txt','utf-8');
    console.log(data);
}
catch(error)
{
    console.error('throw error',error);
}

try{
    await unlink('bio.txt');
    console.log('deleted');
}
catch(error){
    console.error('throw error',error);
}