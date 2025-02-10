const VehiclesModel = require("../models/vehiclesModel");

const getAllVehicles = async (req, res) => {
  try {
    const allVehicles = await VehiclesModel.find({});
    res.status(200).json({ allVehicles });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getVehicle = async (req, res) => {
  const vehicleDetail = req.params.id;
  try {
    const result = await VehiclesModel.findOne({
      vehicleDetail: vehicleDetail,
    });
    if (!result) {
      return res.status(404).json({
        msg: `No records found for vehicle detail: ${vehicleDetail}`,
      });
    }
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const addVehicle = async (req, res) => {
  try {
    const vehicle = await VehiclesModel.create(req.body);
    res.status(201).json({ vehicle });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateVehicle = async (req, res) => {
  const vehicleDetail = req.params.id;
  try {
    const updatedVehicle = await vehiclesModel.findOneAndUpdate(
      { vehicleDetail: vehicleDetail },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedVehicle) {
      return res.status(404).json({
        msg: `No records found for vehicle detail: ${vehicleDetail}`,
      });
    }
    res.status(200).json({ vehicleDetail: updatedVehicle });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteVehicle = async (req, res) => {
  try {
    const vehicleDetail = req.params.id;
    const vehicleDeleted = await VehiclesModel.findOneAndDelete({
      vehicleDetail: vehicleDetail,
    });
    if (!vehicleDeleted) {
      return res
        .status(404)
        .json({ msg: `No records found for vehicle detail: ${vehicleDetail}` });
    }
    res.status(200).json({ vehicleDetail: vehicleDeleted });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllVehicles,
  getVehicle,
  addVehicle,
  updateVehicle,
  deleteVehicle,
};
