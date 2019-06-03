const Bundler = require('parcel-bundler'),
    express = require('express'),
    mongoose = require('mongoose');

const Routes= require("./Routes");

const bundler = new Bundler('./public/index.html', {});

const app = express();

app.use(express.json());



mongoose.connect('mongodb://localhost:27017/Institute').then(() => {
    console.log('Connected to the DB');
}).catch(err => {
    console.error(err);
    process.exit(-1);
});

app.use('/api/messages', require('./app/routes/message.server.routes'));

app.use('/', Routes);

app.use(bundler.middleware());

app.use(express.static('./dist'));

app.get('/', function (req, res) {
    res.sendFile('./dist/index.html');
});

app.listen(3000, err => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Application is running on port 3000');
});

