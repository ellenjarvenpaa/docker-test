import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import {deleteUser, getUserById, getUsers, postUser, putUser} from './controllers/user-controller.mjs';
import mediaRouter from './routes/media-router.mjs';

const hostname = '127.0.0.1';
const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'pug');
app.set('views', 'src/views');

app.use(express.json());
app.use('/docs', express.static(path.join(__dirname, '../docs')));

// simple custom middleware for logging/debugging all requests
app.use((req, res, next) => {
  console.log('Time:', new Date().toISOString(), req.method, req.url);
  next();
});

// render pug a file (home.pug) example
app.get('/', (req, res) => {
  const values = {title: "Dummy REST API docs", message: "TODO: docs"};
  res.render('home', values);
});

// dummy routing example
app.get('/kukkuu', (request, response) => {
  const myResponse = {message: "No moro!"};
  //response.json(myResponse);
  response.sendStatus(200);
});

// other dummy pug example
app.get('/:message', (req, res) => {
  const values = {title: "Dummy REST API docs", message: req.params.message};
  res.render('home', values);
});


// media endpoints
app.use('/api/media', mediaRouter);

// user endpoints
app.get('/api/users', getUsers);
app.get('/api/users/:id', getUserById);
app.post('/api/users', postUser);
app.put('/api/users/:id', putUser);
app.delete('/api/users/:id', deleteUser);


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});