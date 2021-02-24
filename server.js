const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');

require('./server/config/mongoose.config');
app.use(cookieParser());

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/routes/perfume.routes')(app);


const port = 8000;
app.listen(port, () => console.log(`Listening on port: ${port}`) );
