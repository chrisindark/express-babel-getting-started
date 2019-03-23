import BaseController from '../controllers/BaseController';
import UserController from '../controllers/UserController';
import PetController from '../controllers/PetController';


const baseController = new BaseController();
baseController.setRoutes();
const router = baseController.getRouter();

router.use('/users', UserController.getRouter());
router.use('/pets', PetController.getRouter());

// console.log(router.stack);

export default router;
