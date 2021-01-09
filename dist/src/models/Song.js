"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Song {
    constructor(songId, auteur, title, long) {
        this.idsong = songId;
        this.artiste = auteur;
        this.titre = title;
        this.duree = long;
    }
}
exports.default = Song;
