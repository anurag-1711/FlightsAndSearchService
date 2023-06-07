const { FlightRepository, AirplaneRepository } = require('../repository/index');

const { compareTime } = require('../utils/helper');

class FlightService {

    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data) {
        try {
            console.log("data", data);
            if (!compareTime(data.arrivalTime, data.departureTime))
                throw { error: "Arrival time should be greater than departure time" }

            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats: airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer: Service: createFlight", error);
            throw { error }
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer: Service: getFlight", error);
            throw { error }
        }
    }

    async getAllFlights(filter) {
        try {
            const flights = await this.flightRepository.getAllFlights(filter);
            return flights;
        } catch (error) {
            console.log("Something went wrong in the service layer: Service: getAllFlights", error);
            throw { error }
        }
    }

    async updateFlight(flightId, data) {
        try {
            const res = await this.flightRepository.updateFlight(flightId, data);
            return res;
        } catch (error) {
            console.log("Something went wrong in the service layer: Service: getAllFlights", error);
            throw { error }
        }
    }
}

module.exports = FlightService;

/***
 * 
 * What is the data that we need to create a flight?
 * - airplaneId
 * - departureAirportId
 * - arrivalAirportId
 * - arrivalTime
 * - departureTime
 * - price
 * - totalSeats -> Get this from airplane table
 * 
 */