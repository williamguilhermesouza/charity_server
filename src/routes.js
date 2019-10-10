const express = require("express");

const PlacesController = require("./controllers/PlacesController");

const routes = express.Router();

routes.get('/places', PlacesController.show);

module.exports = routes;