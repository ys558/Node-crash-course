const url = require('url')

const myUrl = new URL('http://mywebsite.com:8080/hello.html?id=100&status=active')

// serialize URL
// console.log(myUrl.href);
// console.log(myUrl.toString());

// host (root domain，包括端口)
// console.log(myUrl.host);
// hostname (不包括端口)
// console.log(myUrl.hostname);

// pathname (路径名)
// console.log(myUrl.pathname);

// query
// console.log(myUrl.search);
// console.log(myUrl.searchParams);

// add query parameter
myUrl.searchParams.append('abc','123')
console.log(myUrl.href);

// loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}:${value}`))
