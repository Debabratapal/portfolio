const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')))
app.set("view engine", "ejs")

app.get('/', (req, res) => {
  res.render('index.ejs')
})


app.listen(3000 , () =>{
  console.log("listening at 3000")
})