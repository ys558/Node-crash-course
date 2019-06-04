const path = require('path')

// Basename file name
// console.log(path.basename(__filename));

// Directory name 文件路径名
// console.log(path.dirname(__filename));

// File extension 后缀名
// console.log(path.extname(__filename));

// Create path object
// console.log(path.parse(__filename))
//  // { root: 'D:\\',
//  //   dir: 'D:\\00 demo\\node\\node-crash-course\\reference',
//  //   base: 'path_demo.js',
//  //   ext: '.js',
//  //   name: 'path_demo' }

// Concatenate paths 拼接路径
console.log(path.join(__dirname, 'test', 'hello.html'));
