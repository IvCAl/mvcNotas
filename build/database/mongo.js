"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectionString = "mongodb+srv://shaggy:1234@prueba.ugikfwh.mongodb.net/notas?retryWrites=true&w=majority&appName=Prueba";
mongoose_1.default.connect(connectionString)
    .then(() => {
    console.log("Connected to MongoDB");
})
    .catch((err) => {
    console.error(`Could not connect to MongoDB: ${err}`);
});
