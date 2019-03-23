import BaseController from '../BaseController/';
import db from '../../db';


class PetController extends BaseController {
    constructor() {
        super();
        this.setRoutes();
    }

    setRoutes = () => {
        // this.router.get('/', this.sendIndexPage);
        this.router.get('/', this.list);
    }

    list = (req, res, next) => {
        res.json({ pets: db.pets });
    }

    sendIndexPage = (req, res, next) => {
        res.render('index', { title: 'Pets' });
    }

}

export default new PetController();
