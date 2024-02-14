const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log('Listening on port 3000');
})

app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.end(`<!DOCTYPE html>
<html>
  <head>
    <title>Hello, ${name}!</title>
  </head>
  <body>
    <h1>Hello, ${name}!</h1>
  </body>
</html>`);
});
