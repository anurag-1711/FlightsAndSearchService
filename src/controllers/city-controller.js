const { CityService } = require('../services/index')

const cityService = new CityService();

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created a city",
            err: {}
        })
    } catch (error) {
        console.log("Something went wrong in the controller layer: Controller: create", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a city",
            err: error
        })
    }
}

// DELETE -> /api/cities/:id
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted a city",
            err: {}
        })
    } catch (error) {
        console.log("Something went wrong in the controller layer: Controller: destroy", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete the city",
            err: error
        })
    }
}

// GET -> /api/cities/:id
const get = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully retrieved a city",
            err: {}
        })
    } catch (error) {
        console.log("Something went wrong in the controller layer: Controller: get", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get the city",
            err: error
        })
    }
}

// PUT -> /api/cities/:id
const update = async (req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully updated a city",
            err: {}
        })
    } catch (error) {
        console.log("Something went wrong in the controller layer: Controller: update", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update the city",
            err: error
        })
    }
}

const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message: "Successfully retrieved all cities",
            err: {}
        })  
    } catch (error) {
        console.log("Something went wrong in the controller layer: Controller: getAll", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get the cities",
            err: error
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}