const path = require('path');
const fs = require('fs');

// async mkdir
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err
//     console.log('folder created');
// })

// create and write file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello world', err => {
//     if(err) throw err
//     console.log('file created');
//     // append file
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'i love node js', err => {
//         if(err) throw err
//         console.log('file created');
//     })
// })

// read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf-8', (err,data) => {
//     if(err) throw err
//     console.log(data);
// })

// rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'),
path.join(__dirname, '/test', 'helloworld.txt'), err => {
    if(err) throw err
    console.log('file renamed');
})