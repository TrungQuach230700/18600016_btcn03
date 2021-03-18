const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sumRouter=require('./routers/sum');

app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/',sumRouter);

const port=process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})