import express from 'express';
import bodyparrser from 'body-parser';
import cors from 'cors';
import config from './src/configs/config.js';
import fileUpload from 'express-fileupload';
import morgan from 'morgan';
import https from 'https';
import http from 'http';
import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import uploadService from './src/services/upload.service.js';
import sendmail from './src/services/email.service.js';
import readDirectory from './src/services/files-directory.service.js';

const app = express();
app.use(cors());
app.use(bodyparrser.json());
app.use(express.json());
app.use(express.static('./assets'));
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({ createParentPath: true }));
app.use(express.static('uploads'));
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD, PATCH, OPTIONS, TRACE');
  next();
})

global.__dirname = process.cwd();
console.log('__dirname = ' + __dirname);

// uploads
app.use('/upload', uploadService);

// Files of Folder
app.use('/files', readDirectory);

// email
app.post('/email', sendmail);


// app.use('/static', express.static(__dirname + '/public'));
app.use('/public', express.static(path.join(__dirname, '/public')));

// routes
import routes from './src/routes/routes.js';
app.use('/', routes);

// config server
var host;
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'dev') {
  host = config.server.host_dev
} else {
  host = config.server.host_prod
}
console.log(host);
app.set('port', port);

// Certificate https
const privateKey = fs.readFileSync('/etc/letsencrypt/live/lesophocle.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/lesophocle.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/lesophocle.com/chain.pem', 'utf8');
const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca
};

// Starting both http & https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);
var server = https.createServer(credentials, app);

var port = normalizePort(process.env.PORT || '8082');
app.set('port', port);
server.listen(port);

server.on('listening', onListening);
console.log(`App listening at ${host}:${port} `);

// retour test OK
app.get('/', (req, res) => res.send('Hello my World'));


// _helpers
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ?
    'pipe ' + addr :
    'port ' + addr.port;
  //   debug('Listening on ' + bind);
}

function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}