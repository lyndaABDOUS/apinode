"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cart {
    constructor(id, cartNumb, an, mois) {
        this.id_cart = id;
        this.cartNumber = cartNumb;
        this.month = (mois === undefined) ? null : mois;
        this.year = an;
    }
    get id() {
        return this.id_cart;
    }
    get cartNumb() {
        return (this.cartNumber === null) ? '' : this.cartNumber;
    }
    get Month() {
        return (this.month === null) ? '' : this.month;
    }
    get Year() {
        return this.year;
    }
}
exports.default = Cart;
