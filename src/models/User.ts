import MySQL from '../db/MySQL';

export default class User {

    protected id_user?: number | null;
    private firstname: string | null;
    private lastname: string | null;
    private email: string | null;
    private password: string;
    private date_naissance?: string;
    private sexe?: string;

    protected table: string = 'user';

     /**
     * Creates an instance of User.
     * @param {(userId(instance) | null)} id
     * @param {string} [nom='']
     * @param {string} [prenom='']
     * @param {string} [mail='']
     * @param {string} [pwd='']
     * @param {string} [birthDay]
     * @param {string} [genre]
     * @memberof User
     */


    constructor(userId: number | User | null, nom: string = '', prenom: string ='', mail: string = '', pwd: string = '', birthDay?: string, genre?: string){
        if (userId === null) {
            this.firstname = nom;
            this.lastname = prenom;
            this.email = mail;
            this.password = pwd;
            this.date_naissance = birthDay;
            this.sexe = genre;
        } else if (userId.constructor !== undefined){ 
            const user = <User>userId;
            this.firstname = user.firstname;
            this.lastname = user.lastname;
            this.email = user.email;
            this.password = user.password;
            this.date_naissance = user.date_naissance;
            this.sexe = user.sexe;
        } else {
            let userTest = {id_user: 1, firstname:'TEST', lastname:'Test', email: 'testTEST@test.fr', password: '', date_naissance:'22-05-1997', sexe:'F'}

            this.id_user = userTest.id_user;
            this.firstname = userTest.firstname;
            this.lastname = userTest.lastname;
            this.email = userTest.email;
            this.password = userTest.password;
            this.date_naissance = userTest.date_naissance;
            this.sexe = userTest.sexe;
            
        }
    }

    save(): Promise<number> {
        return new Promise((resolve, reject) => {
            MySQL.insert(this.table, this).then((id: number) => {
                this.id_user = id;
                console.log(`Save ${this.table}`);
                resolve(id)
            }).catch((err) => {
                console.log(err);
                reject(false)
            })
        })
    };


    static select(where: any) {
        return new Promise((resolve, reject) => {
            MySQL.select('user', where).then((arrayuser: Array < any > ) => {
                    let data: Array < User > = [];
                    for (const user of arrayuser) {
                        user.date_naissance = new String(user.date_naissance)
                        user.id_user = user.id_user;
                        data.push(new User(user));
                    }
                    console.log(data);
                    resolve(data)
                })
                .catch((err: any) => {
                    console.log(err);
                    reject(false)
                });
        })
    }


    pk(type: 0 | 1 = 0): string| number {
        return (type) ? 'idUser' : <number>this.id_user;
    }

        /**
     *
     * Return the attribut for the register property in the MySQL Class
     * @readonly
     * @type {Array < string >}
     * @memberof User
     */
    get attributInsert(): Array<string>{
        return ['firstname', 'lastname', 'email', 'password', 'date_naissance', 'sexe' ]
    } 

    private updateId(id: number): void {
        this.id_user = id;
    }


    static isExiste(email: string) {
        return new Promise((resolve, reject) => {
            MySQL.select('user', { email: email }).then((arrayUser: Array < any > ) => {
                    resolve((arrayUser.length > 0))
                })
                .catch((err: any) => {
                    console.log(err);
                    reject(false)
                });
        })
    }


    get id(): number {
        return <number > this.id_user;
    }

    get fullname(): string {
        return this.firstname + ' ' + this.lastname;
    }


}