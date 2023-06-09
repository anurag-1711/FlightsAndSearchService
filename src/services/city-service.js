const { CityRepository } = require('../repository/index');

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong in the service layer: Service: createCity", error);
            throw { error }
        }
    }

    async createManyCities(data) {
        try {
            const cities = await this.cityRepository.createManyCities(data.name);
            return cities;
        } catch (error) {
            console.log("Something went wrong in the service layer: Service: createManyCities", error);
            throw { error }
        }
    }

    async deleteCity(cityId) {
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer: Service: deleteCity", error);
            throw { error }
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong in the service layer: Service: updateCity", error);
            throw { error }
        }
    }

    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the service layer: Service: getCity", error);
            throw { error }
        }
    }

    async getAllCities(filter) {
        try {
            const cities = await this.cityRepository.getAllCities({ name: filter.name });
            return cities;
        } catch (error) {
            console.log("Something went wrong in the service layer: Service: getAllCities", error);
            throw { error }
        }
    }
}

module.exports = CityService;