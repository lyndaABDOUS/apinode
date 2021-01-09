export default class Song {

    private idsong: number;
    private artiste: string;
    private titre: string;
    private duree: Date;

    constructor(songId: number, auteur: string, title: string, long: Date){
        this.idsong = songId;
        this.artiste = auteur;
        this.titre = title;
        this.duree = long;
    }
}