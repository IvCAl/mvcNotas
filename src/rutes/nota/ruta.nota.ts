import Express from "express";
import { controllerNote } from "../../controllers/nota/controller.note";

const router= Express.Router();

router.post('/create',controllerNote.create)
router.delete('/delete', controllerNote.delete)
router.get('/getAll', controllerNote.getAll)
router.post('/getById', controllerNote.getById)
router.post('/update', controllerNote.update)
router.get('/getDB', controllerNote.getDB)
router.post('/createDB', controllerNote.createDB)
router.post('/getByIdDB', controllerNote.getByIdDB)
router.post('/updateDB', controllerNote.updateDB)
export default router
