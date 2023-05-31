const express = require("express");
const CityController = require("../../controllers/city-controller");
const AirportController = require("../../controllers/airport-controller");
const AirplaneController = require("../../controllers/airplane-controller");
const router = express.Router();

// City routes
router.post("/city", CityController.create);
router.post("/cities", CityController.createMany);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.patch("/city/:id", CityController.update);

// Airport routes
router.post("/airport", AirportController.create);
router.post("/airports", AirportController.createMany);
router.delete("/airport/:id", AirportController.destroy);
router.get("/airport/:id", AirportController.get);
router.get("/airport", AirportController.getAll);
router.patch("/airport/:id", AirportController.update);

// Airplane routes
router.post("/airplane", AirplaneController.create);
router.post("/airplanes", AirplaneController.createMany);
router.delete("/airplane/:id", AirplaneController.destroy);
router.get("/airplane/:id", AirplaneController.get);
router.get("/airplane", AirplaneController.getAll);
router.patch("/airplane/:id", AirplaneController.update);


module.exports = router;