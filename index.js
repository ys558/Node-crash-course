// const Person = require('./person')

// const p1 = new Person('xxxx', 20)

// p1.greeting()


// 实验emmiter
// const Logger = require('./logger')
// const logger = new Logger()

// // 监听logger.js传来的事件
// logger.on('message', data => console.log('Called Listener:', data))

// // 执行logger.js中的函数，将msg传给logger函数
// logger.log('hello world')
// logger.log('Hi')
// logger.log('Hello')


const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res)=>{
    // if(req.url ==='/') {
    //     // 1. 写个简陋的展示原理：
    //     // res.writeHead(200, { 'Content-Type':'text/html'})
    //     // res.end('<h1>Home</h1>')

    //     // readFile第一个参数是要读取的内容，第二个参数回调函数：
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'index.html'),
    //         // 回调函数，第一个参数处理错误信息，第二个参数要展示的内容，即上面的内容
    //         (error, content) => {
    //             if (error) throw error;
    //             res.writeHead(200, { 'Content-Type':'text/html'})
    //             res.end(content)
    //         }
    //     )
    // }

    // if (req.url === '/about') {
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'about.html'),
    //         (error, content) => {
    //             if (error) throw error;
    //             res.writeHead(200, { 'Content-Type': 'text/html' })
    //             res.end(content)
    //         }
    //     )
    // }

    // if (req.url === '/api/users') {
    //     const users = [
    //         { name: 'Bob Smith', age: 40},
    //         { name: 'John Doe', age: 30},
    //     ]
    //     res.writeHead(200, { 'Content-Type': 'application/json'})
    //     res.end(JSON.stringify(users))
    // }


    // Build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html': req.url);
    
    // Extention of file
    let extname = path.extname(filePath)

    // Initial content type
    let contentType = 'text/html'

    // Check ext and content type
    switch(extname) {
        case '.js':
            contentType = 'text/javascript'
            break;
        case '.css':
            contentType = 'text/css'
            break;
        case '.json':
            contentType = 'application/json'
            break;
        case '.png':
            contentType = 'image/png'
            break;
        case '.jpg':
            contentType = 'image/jpg'
            break;
    }

    // Read File
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code == "ENOENT") {
                // Page not found
                fs.readFile(
                    path.join(__dirname, 'public', '404.html'), 
                    (error, content) => {
                        res.writeHead(200, {'Content-Type': 'text/html'})
                        res.end(content, 'utf8')
                    }
                )
            } else {
                // Some server error;
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`)
            }
        } else {
            // success response
            res.writeHead(200, {'Content-Type': contentType })
            res.end(content, 'utf8')
        }
    })
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})
