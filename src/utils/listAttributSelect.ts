export type listeTables =  "tuteur" | "user" | "child";

interface attributSelectInterface {
    primaryKey: string;
    attribut: Array < string > ;
}

/**
 *
 * List of the property retrieved for the Select method
 * @readonly
 * @type {Array < string >}
 */
const listAttributSelect: Record < listeTables, attributSelectInterface > = { 
    //Constructs a type with a set of properties Keys of type Type. This utility 
    // can be used to map the properties of a type to another type.
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
// export default { listAttributSelect, listeTables };
export default listAttributSelect;