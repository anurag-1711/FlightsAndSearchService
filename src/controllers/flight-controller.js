const { FlightService } = require('../services/index');

const { ClientErrorCodes, ServerErrorsCodes, SuccessCodes } = require('../utils/error-codes');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            price: req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success: true,
            message: "Successfully created a flight",
            err: {}
        })
    } catch (error) {
        console.log("Something went wrong in the controller layer: Controller: create", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a flight",
            err: error
        })
    }
}

const get = async (req, res) => {
    try {
        const flight = await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            message: "Successfully retrieved a flight",
            err: {}
        })
    } catch (error) {
        console.log("Something went wrong in the controller layer: Controller: get", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a flight",
            err: error
        })
    }
}

const getAll = async (req, res) => {
    try {
        const flights = await flightService.getAllFlights(req.query);
        return res.status(SuccessCodes.OK).json({
            data: flights,
            success: true,
            message: "Successfully retrieved all flight",
            err: {}
        })
    } catch (error) {
        console.log("Something went wrong in the controller layer: Controller: getAll", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get all flight",
            err: error
        })
    }
}



module.exports = {
    create,
    get,
    getAll
}