import express from 'express';


class BaseController {
    constructor() {
        this.router = express.Router();
    }

    setRoutes = () => {
        this.router.get('/', this.sendIndexPage);
    }

    sendIndexPage = (req, res, next) => {
        res.render('index', { title: 'Express' });
    }

    getRouter = () => {
        return this.router;
    }
}

export default BaseController;
