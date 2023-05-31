const { AirportRepository } = require('../repository/index');

class AirportService {
    constructor() {
        this.airportRepository = new AirportRepository();
    }

    async createAirport(data) {
        try {
            const airport = await this.airportRepository.createAirport(data);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the service layer: Service: createAirport", error);
            throw { error }
        }
    }

    async createManyAirports(data) {
        try {
            const airports = await this.airportRepository.createManyAirports(data);
            return airports;
        } catch (error) {
            console.log("Something went wrong in the service layer: Service: createManyAirports", error);
            throw { error }
        }
    }

    async deleteAirport(airportId) {
        try {
            const response = await this.airportRepository.deleteAirport(airportId);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer: Service: deleteAirport", error);
            throw { error }
        }
    }

    async updateAirport(airportId, data) {
        try {
            const airport = await this.airportRepository.updateAirport(airportId, data);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the service layer: Service: updateAirport", error);
            throw { error }
        }
    }

    async getAirport(airportId) {
        try {
            const airport = await this.airportRepository.getAirport(airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the service layer: Service: getAirport", error);
            throw { error }
        }
    }

    async getAllAirports(filter) {
        try {
            const airports = await this.airportRepository.getAllAirports({ name: filter.name });
            return airports;
        } catch (error) {
            console.log("Something went wrong in the service layer: Service: getAllAirports", error);
            throw { error }
        }
    }
}

module.exports = AirportService;