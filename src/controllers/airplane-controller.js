const { AirplaneService } = require('../services/index');

const airplaneService = new AirplaneService();

const create = async (req, res) => {
    try {
        const airplane = await airplaneService.createAirplane(req.body);
        return res.status(201).json({
            data: airplane,
            success: true,
            message: "Successfully created a airplane",
            err: {}
        })
    } catch (error) {
        console.log("Something went wrong in the controller layer: Controller: create", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a airplane",
            err: error
        })
    }
}

const createMany = async (req, res) => {
    try {
        const airplanes = await airplaneService.createManyAirplanes(req.body);
        return res.status(201).json({
            data: airplanes,
            success: true,
            message: "Successfully created an array of Airplanes",
            err: {}
        })
    } catch (error) {
        console.log("Something went wrong in the controller layer: Controller: createMany", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create an array of airplanes",
            err: error
        })
    }
}

// DELETE -> /api/airplanes/:id
const destroy = async (req, res) => {
    try {
        const response = await airplaneService.deleteAirplane(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted a airplane",
            err: {}
        })
    } catch (error) {
        console.log("Something went wrong in the controller layer: Controller: destroy", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete a airplane",
            err: error
        })
    }
}

// PATCH -> /api/airplanes/:id
const update = async (req, res) => {
    try {
        const airplane = await airplaneService.updateAirplane(req.params.id, req.body);
        return res.status(200).json({
            data: airplane,
            success: true,
            message: "Successfully updated a airplane",
            err: {}
        })
    } catch (error) {
        console.log("Something went wrong in the controller layer: Controller: update", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update a airplane",
            err: error
        })
    }
}

// GET -> /api/airplanes/:id
const get = async (req, res) => {
    try {
        const airplane = await airplaneService.getAirplane(req.params.id);
        return res.status(200).json({
            data: airplane,
            success: true,
            message: "Successfully retrieved a airplane",
            err: {}
        })
    } catch (error) {
        console.log("Something went wrong in the controller layer: Controller: get", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get a airplane",
            err: error
        })
    }
}

// GET -> /api/airplanes
const getAll = async (req, res) => {
    try {
        const airplanes = await airplaneService.getAllAirplanes(req.query);
        return res.status(200).json({
            data: airplanes,
            success: true,
            message: "Successfully retrieved all airplanes",
            err: {}
        })
    } catch (error) {
        console.log("Something went wrong in the controller layer: Controller: getAll", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get all airplanes",
            err: error
        })
    }
}

module.exports = {
    create,
    createMany,
    destroy,
    update,
    get,
    getAll
}