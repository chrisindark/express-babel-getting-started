import BaseController from '../BaseController';
import db from '../../db';


class UserController extends BaseController {
    constructor() {
        super();
        this.setRoutes();
        // console.log('user', db);
    }

    setRoutes = () => {
        // this.router.get('/', this.sendIndexPage);
        this.router.get('/', this.list);
        this.router.get('/status', this.sendStatus);
    }

    list = (req, res, next) => {
      res.json({ users: db.users });
    }

    sendIndexPage = (req, res, next) => {
        res.render('index', { title: 'Users' });
    }

    sendStatus = (req, res, next) => {
        res.send('OK');
    }
}

export default new UserController();
