const fs = require('fs');
const path = require('path')

// 1. create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, error => { 
//     if (error) throw error;
//     console.log('Folder created...');
// })

// 2. create and write to file
// 'hello world', 即第二个参数，是要写入的内容
// fs.writeFile(
//     path.join(__dirname, '/test','hello.txt'),
//     'hello world\n',
//     error => { 
//         if (error) throw error;
//         console.log('File written to...');
// })

// // 3. append and write 在原文件添加内容，继续上面的内容
// fs.appendFile(
//     path.join(__dirname, '/test', 'hello.txt'),
//     'xxxxxxxxxxxx',
//     error => {
//         if (error) throw error;
//         console.log('File append to...');
// })


// 将3.的内容以回调函数写在2.里面, 作为回调
// fs.writeFile(
//     path.join(__dirname, '/test','hello.txt'),
//     'hello world\n',
//     error => { 
//         if (error) throw error;
//         console.log('File written to...');

//         // File append
//         fs.appendFile(
//             path.join(__dirname, '/test', 'hello.txt'),
//             'xxxxxxxxxxxx',
//             error => {
//                 if (error) throw error;
//                 console.log('File append to...');
//         })
// })


// read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8',(error, data) => {
//     if (error) throw error;
//     console.log(data);
// })


// rename file
// 第一个参数是原来的文件名，第二个是新的文件名
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'), 
    path.join(__dirname, '/test', 'helloworld.txt'), 
    (error)=>{
        if (error) throw error;
        console.log('File renamed ...');
})
