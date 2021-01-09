"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("mysql");
const listAttributSelect_1 = __importDefault(require("../utils/listAttributSelect"));
class MySQL {
    static insert(table, instance) {
        return new Promise((resolve, reject) => {
            const bdd = mysql_1.createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_DATABASE,
                socketPath: process.env.SOCKETPATH,
                port: parseInt((process.env.PORTMYSQL === undefined) ? '3306' : process.env.PORTMYSQL)
            });
            bdd.connect(err => {
                if (err)
                    console.log('Connection database error');
            });
            let data = [];
            let columns = "";
            let parameters = "";
            for (const [key, value] of Object.entries(instance)) {
                if (instance.attributInsert.indexOf(key) !== -1) {
                    columns += "`" + key + "`,";
                    parameters += "?,";
                    data.push(value);
                }
            }
            columns = columns.slice(0, -1);
            parameters = parameters.slice(0, -1);
            bdd.query(`INSERT INTO ${table} (${columns}) VALUES (${parameters})  `, data, (error, results, fields) => {
                if (error) {
                    reject(error);
                    console.log(error);
                }
                else
                    resolve(results.insertId);
                bdd.end();
            });
        });
    }
    static select(table, where) {
        return new Promise((resolve, reject) => {
            const bdd = mysql_1.createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_DATABASE,
                socketPath: process.env.SOCKETPATH,
                port: parseInt((process.env.PORTMYSQL === undefined) ? '3306' : process.env.PORTMYSQL)
            });
            bdd.connect(err => {
                if (err)
                    console.log('Connection database error');
            });
            let data = [];
            let columns = "";
            let conditionWhere = "";
            let parameters = "";
            const key = listAttributSelect_1.default[table].attribut;
            for (const champs of key) {
                columns += "`" + champs + "`,";
            }
            for (const key in where) {
                conditionWhere += "`" + key + "` LIKE ? and ";
                data.push(where[key]);
            }
            conditionWhere = conditionWhere.slice(0, -5);
            columns = columns.slice(0, -1);
            const query = bdd.query(`SELECT ${columns} FROM ${table} WHERE ${conditionWhere} ;`, [data], (error, results, fields) => {
                if (error) {
                    reject(error);
                    console.log(error);
                }
                else
                    resolve(results);
                bdd.end();
            });
        });
    }
    static selectJoin(table, join, where) {
        return new Promise((resolve, reject) => {
            const bdd = mysql_1.createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_DATABASE,
                socketPath: process.env.SOCKETPATH,
                port: parseInt((process.env.PORTMYSQL === undefined) ? '3306' : process.env.PORTMYSQL)
            });
            bdd.connect(err => {
                if (err)
                    console.log('Connection database error');
            });
            let data = [];
            let columns = "";
            let conditionJoin = "";
            let conditionWhere = "";
            let parameters = "";
            const key = listAttributSelect_1.default[table].attribut;
            for (const champs of key) {
                columns += "`" + champs + "`,";
            }
            for (let i = 0; i < join.length; i++) {
                let nameTable = join[i].table;
                conditionJoin += `${join[i].type} JOIN ${join[i].table} ON ${join[i].where.table}.${join[i].where.foreignKey} = ${join[i].table}.${listAttributSelect_1.default[nameTable].primaryKey} `;
                for (const champs of listAttributSelect_1.default[nameTable].attribut) {
                    columns += "`" + nameTable + "`.`" + champs + "`,";
                }
            }
            for (const key in where) {
                conditionWhere += "`" + key + "` LIKE ? and ";
                data.push(where[key]);
            }
            conditionWhere = conditionWhere.slice(0, -5);
            columns = columns.slice(0, -1);
            const query = bdd.query(`SELECT ${columns} FROM ${table} ${conditionJoin} WHERE ${conditionWhere} ;`, [data], (error, results, fields) => {
                if (error) {
                    reject(error);
                    console.log(error);
                }
                else
                    resolve(results);
                bdd.end();
            });
        });
    }
}
exports.default = MySQL;
