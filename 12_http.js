const http = require('http');
const server = http.createServer((req,res) => {
// console.log(req)
if (req.url === '/') {
    res.end('Welcome to our homepage');
  } else if (req.url === '/about') {
    res.end('Here is our short history');
  } else {
    // Handle all other routes
    res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">back home</a>
    `);
  }

// res.write()

//     res.write(' Welcome to our homepage')
// res.end();
//}
});
// server.listen(5000)
server.listen(3000,() => {
    console.log('server is ruuning on http:localhost:3000')
});


