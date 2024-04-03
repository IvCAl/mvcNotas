import Express from "express";
import { controllerNote } from "../../controllers/nota/controller.note";

const router= Express.Router();

router.post('/create',controllerNote.create)
router.delete('/delete', controllerNote.delete)
router.get('/getAll', controllerNote.getAll)
router.post('/getById', controllerNote.getById)
router.post('/update', controllerNote.update)

export default router
