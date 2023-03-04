// console.log("Hey,How are you");
// console.log(global);

// setTimeout(()=>{
//     console.log("Timer run");
//     clearInterval(interval)
// },7000);
// const interval = setInterval(()=>{
//     console.log("Hello");
// },1000);

// console.log(__dirname);
// console.log(__filename);

const fs = require("fs");

// fs.writeFile("blog.txt","Hello! there",(err)=>{
//     console.log("Done writing");
//     console.log(err);
// })


// const data = fs.readFile('blog.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data.toString());
//     }
// });
// console.log("last line");

// fs.appendFile('blog.txt',"\nGood Evening",(err)=>{
//     console.log("Done Appending");
// })

//directories

// if(!fs.existsSync('./assests')){
//     fs.mkdir('./assets',(err)=>{
//         console.log("Done Directory");
//         console.log(err);
//     })
// }else{
//     fs.rmdir('./assets',(err)=>{
//         console.log("Directory removed");
//         console.log(err);
//     })
// }

fs.unlinkSync('blog.txt',(err)=>{
    console.log("Done deleting");
    console.log(err);
})