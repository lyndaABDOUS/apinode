export default class Cart {

    private id_cart: number;
    private cartNumber: string | null;
    private year: number ;
    private month: string | null;

    constructor(id: number, cartNumb: string,an: number, mois?: string ){
        this.id_cart = id;
        this.cartNumber = cartNumb;
        this.month = (mois === undefined) ? null : mois;
        this.year = an;
    }

    get id() : number{
        return this.id_cart;
    }

    get cartNumb() : string{
        return (this.cartNumber === null) ? '' : this.cartNumber ;
    }

    get Month() : string{
        return (this.month === null) ? '' : this.month;
    }
    
    get Year() : number{
        return this.year;
    }

}