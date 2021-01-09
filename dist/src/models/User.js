"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MySQL_1 = __importDefault(require("../db/MySQL"));
class User {
    constructor(userId, nom = '', prenom = '', mail = '', pwd = '', birthDay, genre) {
        this.table = 'user';
        if (userId === null) {
            this.firstname = nom;
            this.lastname = prenom;
            this.email = mail;
            this.password = pwd;
            this.date_naissance = birthDay;
            this.sexe = genre;
        }
        else if (userId.constructor !== undefined) {
            const user = userId;
            this.updateId(user.pk());
            this.firstname = user.firstname;
            this.lastname = user.lastname;
            this.email = user.email;
            this.password = user.password;
            this.date_naissance = user.date_naissance;
            this.sexe = user.sexe;
        }
        else {
            let userTest = { id_user: 1, firstname: 'TEST', lastname: 'Test', email: 'testTEST@test.fr', password: '', date_naissance: '22-05-1997', sexe: 'F' };
            this.id_user = userTest.id_user;
            this.firstname = userTest.firstname;
            this.lastname = userTest.lastname;
            this.email = userTest.email;
            this.password = userTest.password;
            this.date_naissance = userTest.date_naissance;
            this.sexe = userTest.sexe;
        }
    }
    save() {
        return new Promise((resolve, reject) => {
            MySQL_1.default.insert(this.table, this).then((id) => {
                this.id_user = id;
                console.log(`Save ${this.table}`);
                resolve(id);
            }).catch((err) => {
                console.log(err);
                reject(false);
            });
        });
    }
    ;
    static select(where) {
        return new Promise((resolve, reject) => {
            MySQL_1.default.select('user', where).then((arrayuser) => {
                let data = [];
                for (const user of arrayuser) {
                    user.date_naissance = new String(user.date_naissance);
                    user.id_user = user.id_user;
                    data.push(new user(user));
                }
                console.log(data);
                resolve(data);
            })
                .catch((err) => {
                console.log(err);
                reject(false);
            });
        });
    }
    pk(type = 0) {
        return (type) ? 'idUser' : this.id_user;
    }
    get attributInsert() {
        return ['firstname', 'lastname', 'email', 'password', 'date_naissance', 'sexe'];
    }
    updateId(id) {
        this.id_user = id;
    }
    static isExiste(email) {
        return new Promise((resolve, reject) => {
            MySQL_1.default.select('user', { email: email }).then((arrayUser) => {
                resolve((arrayUser.length > 0));
            })
                .catch((err) => {
                console.log(err);
                reject(false);
            });
        });
    }
    get id() {
        return this.id_user;
    }
    get fullname() {
        return this.firstname + ' ' + this.lastname;
    }
}
exports.default = User;
