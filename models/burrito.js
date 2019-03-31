const db = require('./conn');

class Burrito {
    constructor(id, name, flavor, heat) {
        this.id = id;
        this.name = name;
        this.flavor = flavor;
        this.heat = heat;
    }

    static getById(id) {
        return db.one(`select * from burrito where id=${id}`)
            .then((burritoData) => {
                const burritoInstance = new Burrito(
                                        burritoData.id,
                                        burritoData.name,
                                        burritoData.flavor,
                                        burritoData.heat
                                        );
                return burritoInstance;
            })
            .catch(() => {
                return null;
            });
    }

    static getAll() {
        return db.any(`select * from burrito`)
            .then((arrayOfBurritoData) => {
                return arrayOfBurritoData.map((burritoData) => {
                    const burritoOrders = new Burrito (
                                          burritoData.id,
                                          burritoData.name,
                                          burritoData.flavor,
                                          burritoData.heat  
                                          );
                    console.log(burritoOrders);
                    return burritoOrders;
                });
            })
            .catch(() => {
                return null;
            });
    }

    save() {
        return db.result(`update burrito set
                          name=${this.name},
                          flavor=${this.flavor},
                          heat=${this.heat},
                        where id=${this.id}
                        `)
    }
}

module.exports = Burrito;