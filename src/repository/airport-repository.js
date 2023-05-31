const { Op } = require("sequelize");

const { Airport } = require("../models/index");

class AirportRepository {
    async createAirport({ name, address, cityId }) {
        try {
            const airport = await Airport.create({ name, address, cityId });
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: createAirport", error);
            throw { error }
        }
    }

    async createManyAirports(airports) {
        try {
            const created_airports = await Airport.bulkCreate(airports);
            return created_airports;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: createManyAirports", error);
            throw { error }
        }
    }

    async deleteAirport(airportId) {
        try {
            await Airport.destroy({
                where: {
                    id: airportId
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: deleteAirport", error);
            throw { error }
        }
    }

    async updateAirport(airportId, data) {
        try {
            const airport = await Airport.findByPk(airportId);
            airport.name = data.name;
            airport.cityId = data.cityId;
            await airport.save();
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: updateAirport", error);
            throw { error }
        }
    }

    async getAirport(airportId) {
        try {
            const airport = await Airport.findByPk(airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: getAirport", error);
            throw { error }
        }
    }

    async getAllAirports(filter) {
        try {
            if (filter.name) {
                const airports = await Airport.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return airports;
            }

            const airports = await Airport.findAll();
            return airports;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: getAllAirports", error);
            throw { error };
        }
    }

    // Get all airports for a city
}

module.exports = AirportRepository;