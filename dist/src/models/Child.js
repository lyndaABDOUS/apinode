"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Child {
    constructor(childId, userId, tuteurId) {
        this.id_child = childId;
        this.id_tuteur = tuteurId;
        this.id_user = userId;
    }
    get childId() {
        return this.id_child;
    }
    get userId() {
        return this.id_user;
    }
    get tuteurId() {
        return this.id_tuteur;
    }
    get attributInsert() {
        return ['id_user', 'id_tuteur'];
    }
    ;
}
exports.default = Child;
