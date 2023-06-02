const { ClientErrorCodes } = require("../utils/error-codes");

const validateCreateFlight = (req, res, next) => {
    console.log(req.body);
    if (
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.departureTime ||
        !req.body.arrivalTime ||
        !req.body.price
    ) {
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "Invalid request body for creating a flight",
            error: "Missing required fields"
        })
    }

    next();
}

module.exports = {
    validateCreateFlight
}