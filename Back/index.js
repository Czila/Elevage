const toConnect = require('../Back/config/connexion');
const express = require('express');
const router = require('../Back/routes/routes')
const app = express();
app.use(express.json());
app.listen(3003, () => console.log('Server listenning on port 3003'));
app.use('/', router)

toConnect();