"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const constants_1 = require("./config/constants");
const router_1 = require("./routes/router");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//Router
app.use("/api", router_1.router);
app.listen(constants_1.PORT, () => {
    console.log(`server is listening on port ${constants_1.PORT}`);
});
