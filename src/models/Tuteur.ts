import User from "./User";

export default class Tuteur extends User {

    private id_tuteur: number;
    protected id_user: number;
    private date_sub: Date;
    private date_fin: Date;

    constructor( tuteurId : number, userId : number, dateSub: Date, datefin: Date){
        super(userId);
        this.id_tuteur = tuteurId;
        this.id_user = userId;
        this.date_sub = dateSub;
        this.date_fin = datefin;
    }

    get tuteurId(): number {
        return this.id_tuteur;
    }

    get userId(): number {
        return this.id_user;
    }

    get dateSub(): Date {
        return this.date_sub;
    }

    get datefin(): Date {
        return this.date_fin;
    }

    get attributInsert(): Array < string > {
        return ['id_user', 'date_sub', 'date_fin']
    };

}