const { AirplaneRepository } = require('../repository');

class AirplaneService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
    }

    async createAirplane(data) {
        try {
            const airplane = await this.airplaneRepository.createAirplane(data);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in the service layer: Service: createAirplane", error);
            throw { error }
        }
    }

    async createManyAirplanes(data) {
        try {
            const airplanes = await this.airplaneRepository.createManyAirplanes(data);
            return airplanes;
        } catch (error) {
            console.log("Something went wrong in the service layer: Service: createManyAirplanes", error);
            throw { error }
        }
    }

    async deleteAirplane(airplaneId) {
        try {
            const response = await this.airplaneRepository.deleteAirplane(airplaneId);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer: Service: deleteAirplane", error);
            throw { error }
        }
    }

    async updateAirplane(airplaneId, data) {
        try {
            const airplane = await this.airplaneRepository.updateAirplane(airplaneId, data);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in the service layer: Service: updateAirplane", error);
            throw { error }
        }
    }

    async getAirplane(airplaneId) {
        try {
            const airplane = await this.airplaneRepository.getAirplane(airplaneId);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in the service layer: Service: getAirplane", error);
            throw { error }
        }
    }

    async getAllAirplanes(filter) {
        try {
            const airplanes = await this.airplaneRepository.getAllAirplanes({ name: filter.name });
            return airplanes;
        } catch (error) {
            console.log("Something went wrong in the service layer: Service: getAllAirplanes", error);
            throw { error }
        }
    }
}

module.exports = AirplaneService;