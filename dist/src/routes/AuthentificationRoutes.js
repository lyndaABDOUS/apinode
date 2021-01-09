"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthentificationRoute = void 0;
const express_1 = require("express");
const AuthController_1 = require("../controller/AuthController");
const route = express_1.Router();
exports.AuthentificationRoute = route;
route.get('/', (req, res) => {
    return res.end('<p> hello word </p>');
});
route.post('/login', AuthController_1.AuthController.login);
route.post('/register', AuthController_1.AuthController.register);
