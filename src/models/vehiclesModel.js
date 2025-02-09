const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
  vehicleDetail: {
    type: String,
    required: [true, "Must provide vehicle detail"],
    trim: true,
    maxlength: [10, "Vehicle detail cannot be more than 10 characters"],
  },
  checkedIn: {
    type: Boolean,
    default: true,
  },
  checkedInDateTime: {
    type: Date,
    default: Date.now, // Set default value to current date and time
  },
  checkedOutDateTime: {
    type: Date,
    default: null,
  },
});

module.exports = mongoose.model("VehiclesModel", VehicleSchema);
