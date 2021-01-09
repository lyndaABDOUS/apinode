"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Facturation {
    constructor(facturationId, tuteurId, price, cartId, dates) {
        this.id_facturation = facturationId;
        this.id_tuteur = tuteurId;
        this.id_cart = cartId;
        this.prix = price;
        this.date = dates;
    }
    get facturationId() {
        return this.id_facturation;
    }
    get tuteurId() {
        return this.id_tuteur;
    }
    get price() {
        return this.prix;
    }
    get cartId() {
        return this.id_cart;
    }
    get dates() {
        return this.date;
    }
}
exports.default = Facturation;
