const { City } = require('../models/index');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: createCity", error);
            throw { error }
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: deleteCity", error);
            throw { error }
        }
    }

    async updateCity(cityId, data) {
        try {
            // The below approach will not return updated city object
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     }
            // })

            // The below approach will return updated city object
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();

            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: updateCity", error);
            throw { error }
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: getCity", error);
            throw { error }
        }
    }

    async getAllCities() {
        try {
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: getAllCities", error);
            throw { error }
        }
    }
}

module.exports = CityRepository;