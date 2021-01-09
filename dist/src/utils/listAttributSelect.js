"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listAttributSelect = {
    "child": {
        primaryKey: `id_child`,
        attribut: [`id_child`, `id_tuteur`, `id_user`]
    },
    "tuteur": {
        primaryKey: `id_tuteur`,
        attribut: [`id_user`, `date_sub`, `date_fin`, `id_tuteur`]
    },
    "user": {
        primaryKey: `id_user`,
        attribut: [`id_user`, `firstname`, `lastname`, `password`, `email`, `date_naissance`, `sexe`]
    },
};
exports.default = listAttributSelect;
