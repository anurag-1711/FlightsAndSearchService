const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const airport = await airportService.createAirport(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: "Successfully created an airport",
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong in the controller layer: Controller: create", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create an airport",
            err: error
        });
    }
};

const createMany = async (req, res) => {
    try {
        const airports = await airportService.createManyAirports(req.body);
        return res.status(200).json({
            data: airports,
            success: true,
            message: "Successfully created an array of airports",
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong in the controller layer: Controller: createMany", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create an array of airports",
            err: error
        });
    }
};

const destroy = async (req, res) => {
    try {
        const response = await airportService.deleteAirport(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted an airport",
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong in the controller layer: Controller: destroy", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete the airport",
            err: error
        });
    }
};

const get = async (req, res) => {
    try {
        const airport = await airportService.getAirport(req.params.id);
        return res.status(200).json({
            data: airport,
            success: true,
            message: "Successfully retrieved an airport",
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong in the controller layer: Controller: get", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get the airport",
            err: error
        });
    }
};

const update = async (req, res) => {
    try {
        const airport = await airportService.updateAirport(req.params.id, req.body);
        return res.status(200).json({
            data: airport,
            success: true,
            message: "Successfully updated an airport",
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong in the controller layer: Controller: update", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update the airport",
            err: error
        });
    }
};

const getAll = async (req, res) => {
    try {
        const airports = await airportService.getAllAirports(req.query);
        return res.status(200).json({
            data: airports,
            success: true,
            message: "Successfully retrieved all airports",
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong in the controller layer: Controller: getAll", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get the airports",
            err: error
        });
    }
};

module.exports = {
    create,
    createMany,
    destroy,
    get,
    update,
    getAll
};