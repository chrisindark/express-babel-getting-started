import express from 'express';
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import varsConfig from './vars';
import router from '../routes';


const app = express();

app.use(morgan(varsConfig.logs));

// parse body params and attach them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

app.use(cookieParser());

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

export default app;
