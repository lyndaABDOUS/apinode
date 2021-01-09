"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
class Tuteur extends User_1.default {
    constructor(tuteurId, userId, dateSub, datefin) {
        super(userId);
        this.id_tuteur = tuteurId;
        this.id_user = userId;
        this.date_sub = dateSub;
        this.date_fin = datefin;
    }
    get tuteurId() {
        return this.id_tuteur;
    }
    get userId() {
        return this.id_user;
    }
    get dateSub() {
        return this.date_sub;
    }
    get datefin() {
        return this.date_fin;
    }
    get attributInsert() {
        return ['id_user', 'date_sub', 'date_fin'];
    }
    ;
}
exports.default = Tuteur;
