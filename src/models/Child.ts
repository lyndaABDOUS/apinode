export default class Child {
    
    private id_child : number;
    private id_user : number;
    private id_tuteur : number;
    
    constructor(childId : number, userId : number, tuteurId : number ) {
        this.id_child = childId;
        this.id_tuteur = tuteurId;
        this.id_user = userId;
    }

    get childId() : number {
        return this.id_child;
    }

    get userId() : number {
        return this.id_user;
    } 

    get tuteurId() : number {
        return this.id_tuteur;
    } 

    get attributInsert(): Array < string > {
        return ['id_user', 'id_tuteur']
    };

}