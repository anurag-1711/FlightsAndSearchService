class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const created = await this.model.create(data);
            return created;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: create", error);
            throw { error }
        }
    }

    async createMany(data) {
        try {
            const created = await this.model.bulkCreate(data);
            return created;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: createMany", error);
            throw { error }
        }
    }

    async delete(id) {
        try {
            await this.model.destroy({
                where: {
                    id
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: delete", error);
            throw { error }
        }
    }

    async update(id, data) {
        try {
            const entity = await this.model.findByPk(id);
            Object.keys(data).forEach((key) => {
                entity[key] = data[key];
            })
            await entity.save();

            return entity;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: update", error);
            throw { error }
        }
    }

    async get(id) {
        try {
            const entity = await this.model.findByPk(id);
            return entity;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: get", error);
            throw { error }
        }
    }

    async getAll(filter) {
        try {
            const entities = await this.model.findAll(
                {
                    where: filter
                }
            );
            return entities;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: getAll", error);
            throw { error }
        }
    }

}

module.exports = CrudRepository;