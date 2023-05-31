const { Op } = require('sequelize');

const { Airplane } = require('../models/index');

class AirplaneRepository {
    async createAirplane({ modelNumber, capacity }) {
        try {
            const airplane = await Airplane.create({ modelNumber, capacity });
            return airplane;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: createAirplane", error);
            throw { error }
        }
    }

    async createManyAirplanes(airplanes) {
        try {
            const created_airplanes = await Airplane.bulkCreate(airplanes);
            return created_airplanes;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: createManyAirplanes", error);
            throw { error }
        }
    }

    async deleteAirplane(airplaneId) {
        try {
            await Airplane.destroy({
                where: {
                    id: airplaneId
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: deleteAirplane", error);
            throw { error }
        }
    }

    async updateAirplane(airplaneId, data) {
        try {
            const airplane = await Airplane.findByPk(airplaneId);
            airplane.modelNumber = data.modelNumber;
            airplane.capacity = data.capacity;
            await airplane.save();
            return airplane;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: updateAirplane", error);
            throw { error }
        }
    }

    async getAirplane(airplaneId) {
        try {
            const airplane = await Airplane.findByPk(airplaneId);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: getAirplane", error);
            throw { error }
        }
    }

    async getAllAirplanes(filter) {
        try {
            if (filter.name) {
                const airplanes = await Airplane.findAll({
                    where: {
                        modelNumber: {
                            [Op.like]: `%${filter.modelNumber}%`
                        }
                    }
                });
                return airplanes;
            }
            const airplanes = await Airplane.findAll();
            return airplanes;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: getAirplanes", error);
            throw { error }
        }
    }
}

module.exports = AirplaneRepository;