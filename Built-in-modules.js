// OS module
const os = require('os')
// this method shows info about the user 
 const user = os.userInfo()
//  console.log(user);
 // method returns the system uptime ine seconds
 console.log(os.uptime());
 // lets explore some more method of os module
 const methods={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()

 }
console.log(methods);



// Now lets move on to the Path module
const path=require('path')
console.log(path.sep);
// note utf-8 is very important while reading a file otherwise we will get buffer 

// now we will move to fileSystem module 
const fs = require('fs');
const { readFile } = require('fs/promises');
// reading the text file
const first=fs.readFileSync('./content/first.txt','utf-8')
console.log(first);

// writing the inbuilt file or creating the new one if it doesnt exists 
const write=fs.writeFileSync('./content/second1.txt','hello I created this file using writeFileSync method ')

console.log(write);

fs.writeFileSync('./content/first.txt','Hello I am overwriting the text in this file through writeSync method ')
const second= fs.readFileSync('./content/second.txt','utf-8')

const newFile=fs.writeFileSync('./content/newFle.txt',`this is how append works check in the javascirpt file ${first},${second}`,{flag:'a'})



// from here the fs async starts 
readFile('./content/first.txt','utf8',(e,r)=>{
    if(e){
        console.log(e);
        return
    }
    else console.log(r);

})
fs.writeFile('./content/againAsync.txt','Hey hey this file is created with the help of async ',(e,r)=>{
    if(e){
        console.log(e);
        return
    }
})


// difference between sync and async
// 1. in sync it works line by line so it takes time to complete the task . it moves to the next task only if the first is completed 


//2. In this case it async do the first task then try to complete next task if it is taking some time then async puts it into the upoload then it moves to next task directly






