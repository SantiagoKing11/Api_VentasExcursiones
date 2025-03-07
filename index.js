const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
const reservasRoute = require("./routes/reservas");
const transportesRoute = require("./routes/transportes");
const pagosRoute = require("./routes/pagos");
const resenasRoute = require("./routes/resenas");
const transporte_reservaRoute = require("./routes/transporte_reserva");
const guiasRoute = require("./routes/guias");
const clientesRoute = require("./routes/clientes");
const usuariosRoute = require("./routes/usuarios");
const excursiones_guiasRoute = require("./routes/excursiones_guias");
const excursionesRoute = require("./routes/excursiones");
const loginRoute = require("./routes/login");
const accesoRoute = require("./routes/acceso");

// Rutas de la API
app.use("/api/login", loginRoute);
app.use("/api/reservas", reservasRoute);
app.use("/api/transportes", transportesRoute);
app.use("/api/pagos", pagosRoute);
app.use("/api/resenas", resenasRoute);
app.use("/api/guias", guiasRoute);
app.use("/api/transporte_reserva", transporte_reservaRoute);
app.use("/api/clientes", clientesRoute);
app.use("/api/usuarios", usuariosRoute);
app.use("/api/excursiones_guias", excursiones_guiasRoute);
app.use("/api/excursiones", excursionesRoute);
app.use("/api/acceso", accesoRoute);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
