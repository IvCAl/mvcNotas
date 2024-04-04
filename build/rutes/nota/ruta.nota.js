"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_note_1 = require("../../controllers/nota/controller.note");
const router = express_1.default.Router();
router.post('/create', controller_note_1.controllerNote.create);
router.delete('/delete', controller_note_1.controllerNote.delete);
router.get('/getAll', controller_note_1.controllerNote.getAll);
router.post('/getById', controller_note_1.controllerNote.getById);
router.post('/update', controller_note_1.controllerNote.update);
exports.default = router;
