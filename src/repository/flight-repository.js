const { Flights } = require('../models/index');
const { Op } = require('sequelize');

class FlightRepository {

    #createFilter(data) {
        let filter = {};
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        if (data.minPrice && data.maxPrice) {
            filter.price = {
                [Op.between]: [data.minPrice, data.maxPrice]
            }
        } else if (data.minPrice) {
            filter.price = {
                [Op.gte]: data.minPrice
            }
        } else if (data.maxPrice) {
            filter.price = {
                [Op.lte]: data.maxPrice
            }
        }
        return filter;
    }

    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: createFlight", error);
            throw { error }
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: getFlight", error);
            throw { error }
        }
    }

    async getAllFlights(filter) {
        try {
            const filterObj = this.#createFilter(filter);
            console.log("filterObj", filterObj);
            const flights = await Flights.findAll(
                {
                    where: filterObj
                }
            );
            return flights;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: getFlight", error);
            throw { error }
        }
    }

    async updateFlight(flightId, data) {
        try {
            await Flights.update(data, {
                where: {
                    id: flightId
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer: Service: getFlight", error);
            throw { error }
        }
    }

}

module.exports = FlightRepository;



/***
 * 
 * {
 *      where: {
 *         arrivalAirportId: 1,
 *          departureAirportId: 2,
 *         price: {
 *             [Op.between]: [1000, 2000]
 *        }        
 *      }
 * }
 * 
 */