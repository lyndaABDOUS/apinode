export default class Facturation {

    private id_facturation: number;
    private id_tuteur: number;
    private prix: string;
    private id_cart: number;
    private date : Date ;

    constructor(facturationId: number, tuteurId: number, price: string, cartId: number, dates : Date){
        this.id_facturation = facturationId;
        this.id_tuteur = tuteurId;
        this.id_cart = cartId;
        this.prix = price;
        this.date = dates;
    }

    get facturationId(): number {
        return this.id_facturation;
    }

    get tuteurId(): number {
        return this.id_tuteur;
    }

    get price(): string {
        return this.prix;
    }

    get cartId(): number {
        return this.id_cart;
    }

    get dates(): Date {
        return this.date;
    }
}