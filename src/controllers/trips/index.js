const Trip = require("../../models/trips");
async function createTrip(req, res) {
  try {
    const trip = req.body;
    for (const field of [
      "location",
      "destiny",
      "location_name",
      "destiny_name",
    ]) {
      if (!trip.hasOwnProperty(field)) {
        throw {
          status: 400,
          message: `Field ${field} is required`,
          custom: true,
        };
      }
    }
    await Trip.create({
      username: req.authUser.username,
      location: trip.location,
      location_name: trip.location_name,
      destiny: trip.destiny,
      destiny_name: trip.destiny_name,
    });
    res.status(200).json({
      status: 200,
      message: `Sua viagem para ${trip.destiny_name} será aceita em alguns minutos`,
    });
  } catch (error) {
    if (error.original && error.original.errno === 19) {
      res.status(409).json({
        status: 409,
        error: "Usuário já está a espera de um motorista",
      });
      return;
    }
    if (error.custom) {
      res.status(error.status).json({
        statusCode: error.status,
        message: error.message,
      });
    } else {
      res.status(500).json({ status: 500, message: "Internal server error" });
    }
  }
}
async function deleteTrip(req, res) {
  try {
    await Trip.destroy({ where: { username: req.authUser.username } });
    res.status(200).json({
      status: 200,
      message: "Viagem cancelada com sucesso",
    });
  } catch (error) {
    if (error.custom) {
      res.status(error.status).json({
        statusCode: error.status,
        message: error.message,
      });
    } else {
      res.status(500).json({ status: 500, message: "Internal server error" });
    }
  }
}
module.exports = { createTrip, deleteTrip };
