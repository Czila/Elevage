const express = require('express');
const cats = require('./routes/cats.js');
const app = express();
app.use(express.json()); 

app.use('/cats', cats); 
app.get('/messages', (req, res) => {
  res.send('this is all of your messages');
});
app.listen(3000, () => console.log('Server listenning on port 3000'));
