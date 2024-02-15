const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log('Listening on port 3000');
})

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
});

app.get('/about', (req, res) => {
  res.send(`
  <h1>"Git Practice"</h1>
  <p>Our goal in this project is to develop a basic Express application. 
  This will be done as a team with a mentor to practice good git habits.</p>`)
});

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

// Must be last:
app.use((req, res, next) => {
  res.status(404).end(`<!DOCTYPE html>
  <html>
    <head>
      <title>404: Page Not Found</title>
    </head>
    <body>
      <h1>404: Page Not Found!</h1>
      <nav>
        <a href="/">
          Click here
        </a>
        to return to the home page.
      </nav>
    </body>
  </html>`);
});
