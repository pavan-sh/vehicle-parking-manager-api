const express = require("express");
const router = express.Router();

const {
  getAllVehicles,
  getVehicle,
  addVehicle,
  updateVehicle,
  deleteVehicle,
} = require("../controllers/vehiclesController");

router.route("/").get(getAllVehicles).post(addVehicle);

router.route("/:id").get(getVehicle).patch(updateVehicle).delete(deleteVehicle);

module.exports = router;
