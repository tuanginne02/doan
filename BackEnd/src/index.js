const express = require('express')
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");

const app = express()
const hostname = "127.0.0.1";
const port = 5501;


//http logger
app.use(morgan("combined"));    
app.use(express.static(path.join(__dirname, "public")));
// Template Engine
app.engine(
    'hbs',
    engine({
      extname: 'hbs',
    })
  );
  app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "resources", "views"));



app.get('/',  (req, res) => {
  res.render("home")
})

  app.get('/news', (req, res) => {
    res.render('news');
  });

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });