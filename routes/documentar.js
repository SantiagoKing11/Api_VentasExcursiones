const express = require("express");
const router = express.Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Iniciar sesión y obtener un token
 *     description: Permite autenticar a un usuario y recibir un token JWT para acceder a los servicios protegidos.
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Administrador"
 *               apellido:
 *                 type: string
 *                 example: "Sistema"
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso, devuelve el token de acceso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       401:
 *         description: Credenciales inválidas.
 *       500:
 *         description: Error en el servidor.
 */


/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: Endpoints para la gestión de clientes
 */

/**
 * @swagger
 * /api/clientes:
 *   get:
 *     summary: Obtener todos los clientes
 *     description: Retorna una lista con todos los clientes registrados. Requiere autenticación.
 *     tags: [Clientes]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de clientes obtenida correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_cliente:
 *                     type: integer
 *                     example: 1
 *                   id_usuario:
 *                     type: integer
 *                     example: 10
 *                   nacionalidad:
 *                     type: string
 *                     example: "Mexicana"
 *                   fecha_registro:
 *                     type: string
 *                     format: date
 *                     example: "2024-03-10"
 */

/**
 * @swagger
 * /api/clientes/{id}:
 *   get:
 *     summary: Obtener un cliente por ID
 *     description: Retorna los datos de un cliente específico. Requiere autenticación.
 *     tags: [Clientes]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del cliente
 *     responses:
 *       200:
 *         description: Cliente encontrado correctamente.
 *       404:
 *         description: Cliente no encontrado.
 */

/**
 * @swagger
 * /api/clientes:
 *   post:
 *     summary: Crear un nuevo cliente
 *     description: Agrega un nuevo cliente a la base de datos. Requiere autenticación.
 *     tags: [Clientes]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_usuario:
 *                 type: integer
 *                 example: 10
 *               nacionalidad:
 *                 type: string
 *                 example: "Mexicana"
 *               fecha_registro:
 *                 type: string
 *                 format: date
 *                 example: "2024-03-10"
 *     responses:
 *       201:
 *         description: Cliente creado con éxito.
 */

/**
 * @swagger
 * /api/clientes/{id}:
 *   put:
 *     summary: Actualizar un cliente
 *     description: Modifica los datos de un cliente existente. Requiere autenticación.
 *     tags: [Clientes]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_usuario:
 *                 type: integer
 *                 example: 10
 *               nacionalidad:
 *                 type: string
 *                 example: "Mexicana"
 *               fecha_registro:
 *                 type: string
 *                 format: date
 *                 example: "2024-03-10"
 *     responses:
 *       200:
 *         description: Cliente actualizado con éxito.
 */

/**
 * @swagger
 * /api/clientes/{id}:
 *   delete:
 *     summary: Eliminar un cliente
 *     description: Elimina un cliente de la base de datos. Requiere autenticación.
 *     tags: [Clientes]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del cliente a eliminar
 *     responses:
 *       200:
 *         description: Cliente eliminado con éxito.
 */

/**
 * @swagger
 * tags:
 *   name: ExcursionGuias
 *   description: Endpoints para la gestión de relaciones entre excursiones y guías
 */

/**
 * @swagger
 * /api/excursion_guias:
 *   get:
 *     summary: Obtener todas las relaciones entre excursiones y guías
 *     description: Retorna una lista con todas las relaciones registradas. Requiere autenticación.
 *     tags: [ExcursionGuias]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de relaciones obtenida correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_excursion:
 *                     type: integer
 *                     example: 1
 *                   id_guia:
 *                     type: integer
 *                     example: 2
 */

/**
 * @swagger
 * /api/excursion_guias/{id_excursion}/{id_guia}:
 *   get:
 *     summary: Obtener una relación específica por ID de excursión y guía
 *     description: Retorna los datos de una relación específica. Requiere autenticación.
 *     tags: [ExcursionGuias]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_excursion
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la excursión
 *       - in: path
 *         name: id_guia
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del guía
 *     responses:
 *       200:
 *         description: Relación encontrada correctamente.
 *       404:
 *         description: Relación no encontrada.
 */

/**
 * @swagger
 * /api/excursion_guias:
 *   post:
 *     summary: Asignar un guía a una excursión
 *     description: Agrega una nueva relación entre un guía y una excursión. Requiere autenticación.
 *     tags: [ExcursionGuias]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_excursion:
 *                 type: integer
 *                 example: 1
 *               id_guia:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Guía asignado a excursión con éxito.
 */

/**
 * @swagger
 * /api/excursion_guias/{id_excursion}/{id_guia}:
 *   put:
 *     summary: Actualizar una relación entre excursión y guía
 *     description: Modifica los datos de una relación existente. Requiere autenticación.
 *     tags: [ExcursionGuias]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_excursion
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la excursión
 *       - in: path
 *         name: id_guia
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del guía
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_excursion:
 *                 type: integer
 *                 example: 3
 *               id_guia:
 *                 type: integer
 *                 example: 4
 *     responses:
 *       200:
 *         description: Relación actualizada con éxito.
 */

/**
 * @swagger
 * /api/excursion_guias/{id_excursion}/{id_guia}:
 *   delete:
 *     summary: Eliminar una relación entre excursión y guía
 *     description: Elimina una relación de la base de datos. Requiere autenticación.
 *     tags: [ExcursionGuias]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_excursion
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la excursión
 *       - in: path
 *         name: id_guia
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del guía
 *     responses:
 *       200:
 *         description: Relación eliminada con éxito.
 */


/**
 * @swagger
 * tags:
 *   name: Excursiones
 *   description: Endpoints para la gestión de excursiones
 */

/**
 * @swagger
 * /api/excursiones:
 *   get:
 *     summary: Obtener todas las excursiones
 *     description: Retorna una lista con todas las excursiones registradas. Requiere autenticación.
 *     tags: [Excursiones]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de excursiones obtenida correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_excursion:
 *                     type: integer
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     example: "Excursión a la playa"
 *                   descripcion:
 *                     type: string
 *                     example: "Una excursión para disfrutar de la playa."
 *                   precio:
 *                     type: number
 *                     format: float
 *                     example: 100.00
 *                   duracion:
 *                     type: string
 *                     example: "5 horas"
 */

/**
 * @swagger
 * /api/excursiones/{id}:
 *   get:
 *     summary: Obtener una excursión por ID
 *     description: Retorna los detalles de una excursión específica. Requiere autenticación.
 *     tags: [Excursiones]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la excursión
 *     responses:
 *       200:
 *         description: Detalles de la excursión obtenidos correctamente.
 *       404:
 *         description: Excursión no encontrada.
 */

/**
 * @swagger
 * /api/excursiones:
 *   post:
 *     summary: Crear una nueva excursión
 *     description: Permite crear una nueva excursión con los datos proporcionados. Requiere autenticación.
 *     tags: [Excursiones]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Excursión a la montaña"
 *               descripcion:
 *                 type: string
 *                 example: "Explora las hermosas montañas."
 *               precio:
 *                 type: number
 *                 format: float
 *                 example: 150.00
 *               duracion:
 *                 type: string
 *                 example: "6 horas"
 *     responses:
 *       201:
 *         description: Excursión creada con éxito.
 */

/**
 * @swagger
 * /api/excursiones/{id}:
 *   put:
 *     summary: Actualizar una excursión existente
 *     description: Modifica los detalles de una excursión existente. Requiere autenticación.
 *     tags: [Excursiones]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la excursión
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Excursión a la selva"
 *               descripcion:
 *                 type: string
 *                 example: "Recorrido por la selva tropical."
 *               precio:
 *                 type: number
 *                 format: float
 *                 example: 200.00
 *               duracion:
 *                 type: string
 *                 example: "8 horas"
 *     responses:
 *       200:
 *         description: Excursión actualizada con éxito.
 */

/**
 * @swagger
 * /api/excursiones/{id}:
 *   delete:
 *     summary: Eliminar una excursión
 *     description: Elimina una excursión específica por su ID. Requiere autenticación.
 *     tags: [Excursiones]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la excursión
 *     responses:
 *       200:
 *         description: Excursión eliminada con éxito.
 *       404:
 *         description: Excursión no encontrada.
 */

/**
 * @swagger
 * tags:
 *   name: Guias
 *   description: Endpoints para la gestión de guías
 */

/**
 * @swagger
 * /api/guias:
 *   get:
 *     summary: Obtener todos los guías
 *     description: Retorna una lista con todos los guías registrados. Requiere autenticación.
 *     tags: [Guias]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de guías obtenida correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_guia:
 *                     type: integer
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     example: "Juan"
 *                   apellido:
 *                     type: string
 *                     example: "Pérez"
 *                   telefono:
 *                     type: string
 *                     example: "123456789"
 *                   email:
 *                     type: string
 *                     example: "juan.perez@ejemplo.com"
 *                   especialidad:
 *                     type: string
 *                     example: "Historia"
 */

/**
 * @swagger
 * /api/guias/{id}:
 *   get:
 *     summary: Obtener un guía por ID
 *     description: Retorna los detalles de un guía específico. Requiere autenticación.
 *     tags: [Guias]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del guía
 *     responses:
 *       200:
 *         description: Detalles del guía obtenidos correctamente.
 *       404:
 *         description: Guía no encontrada.
 */

/**
 * @swagger
 * /api/guias:
 *   post:
 *     summary: Crear un nuevo guía
 *     description: Permite crear un nuevo guía con los datos proporcionados. Requiere autenticación.
 *     tags: [Guias]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Carlos"
 *               apellido:
 *                 type: string
 *                 example: "Sánchez"
 *               telefono:
 *                 type: string
 *                 example: "987654321"
 *               email:
 *                 type: string
 *                 example: "carlos.sanchez@ejemplo.com"
 *               especialidad:
 *                 type: string
 *                 example: "Aventura"
 *     responses:
 *       201:
 *         description: Guía creado con éxito.
 */

/**
 * @swagger
 * /api/guias/{id}:
 *   put:
 *     summary: Actualizar un guía existente
 *     description: Modifica los detalles de un guía existente. Requiere autenticación.
 *     tags: [Guias]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del guía
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Sofia"
 *               apellido:
 *                 type: string
 *                 example: "González"
 *               telefono:
 *                 type: string
 *                 example: "555555555"
 *               email:
 *                 type: string
 *                 example: "sofia.gonzalez@ejemplo.com"
 *               especialidad:
 *                 type: string
 *                 example: "Naturaleza"
 *     responses:
 *       200:
 *         description: Guía actualizado con éxito.
 */

/**
 * @swagger
 * /api/guias/{id}:
 *   delete:
 *     summary: Eliminar un guía
 *     description: Elimina un guía específico por su ID. Requiere autenticación.
 *     tags: [Guias]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del guía
 *     responses:
 *       200:
 *         description: Guía eliminada con éxito.
 *       404:
 *         description: Guía no encontrada.
 */


/**
 * @swagger
 * tags:
 *   name: Pagos
 *   description: Endpoints para la gestión de pagos
 */

/**
 * @swagger
 * /api/pagos:
 *   get:
 *     summary: Obtener todos los pagos
 *     description: Retorna una lista con todos los pagos registrados. Requiere autenticación.
 *     tags: [Pagos]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de pagos obtenida correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_pago:
 *                     type: integer
 *                     example: 1
 *                   id_reserva:
 *                     type: integer
 *                     example: 1
 *                   monto:
 *                     type: number
 *                     format: float
 *                     example: 200.50
 *                   fecha_pago:
 *                     type: string
 *                     format: date
 *                     example: "2025-03-10"
 *                   metodo_pago:
 *                     type: string
 *                     example: "Tarjeta de crédito"
 */

/**
 * @swagger
 * /api/pagos/{id}:
 *   get:
 *     summary: Obtener un pago por ID
 *     description: Retorna los detalles de un pago específico. Requiere autenticación.
 *     tags: [Pagos]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del pago
 *     responses:
 *       200:
 *         description: Detalles del pago obtenidos correctamente.
 *       404:
 *         description: Pago no encontrado.
 */

/**
 * @swagger
 * /api/pagos:
 *   post:
 *     summary: Crear un nuevo pago
 *     description: Permite crear un nuevo pago con los datos proporcionados. Requiere autenticación.
 *     tags: [Pagos]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_reserva:
 *                 type: integer
 *                 example: 1
 *               monto:
 *                 type: number
 *                 format: float
 *                 example: 150.00
 *               fecha_pago:
 *                 type: string
 *                 format: date
 *                 example: "2025-03-10"
 *               metodo_pago:
 *                 type: string
 *                 example: "PayPal"
 *     responses:
 *       201:
 *         description: Pago creado con éxito.
 */

/**
 * @swagger
 * /api/pagos/{id}:
 *   put:
 *     summary: Actualizar un pago existente
 *     description: Modifica los detalles de un pago existente. Requiere autenticación.
 *     tags: [Pagos]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del pago
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_reserva:
 *                 type: integer
 *                 example: 1
 *               monto:
 *                 type: number
 *                 format: float
 *                 example: 250.00
 *               fecha_pago:
 *                 type: string
 *                 format: date
 *                 example: "2025-03-15"
 *               metodo_pago:
 *                 type: string
 *                 example: "Transferencia bancaria"
 *     responses:
 *       200:
 *         description: Pago actualizado con éxito.
 */

/**
 * @swagger
 * /api/pagos/{id}:
 *   delete:
 *     summary: Eliminar un pago
 *     description: Elimina un pago específico por su ID. Requiere autenticación.
 *     tags: [Pagos]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del pago
 *     responses:
 *       200:
 *         description: Pago eliminado con éxito.
 *       404:
 *         description: Pago no encontrado.
 */


/**
 * @swagger
 * tags:
 *   name: Reseñas
 *   description: Endpoints para la gestión de reseñas
 */

/**
 * @swagger
 * /api/reseñas:
 *   get:
 *     summary: Obtener todas las reseñas
 *     description: Retorna una lista con todas las reseñas registradas. Requiere autenticación.
 *     tags: [Reseñas]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de reseñas obtenida correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_reseña:
 *                     type: integer
 *                     example: 1
 *                   id_usuario:
 *                     type: integer
 *                     example: 1
 *                   id_excursion:
 *                     type: integer
 *                     example: 2
 *                   calificacion:
 *                     type: integer
 *                     example: 5
 *                   comentario:
 *                     type: string
 *                     example: "Excelente excursión, muy recomendable."
 *                   fecha_reseña:
 *                     type: string
 *                     format: date
 *                     example: "2025-03-10"
 */

/**
 * @swagger
 * /api/reseñas/{id}:
 *   get:
 *     summary: Obtener una reseña por ID
 *     description: Retorna los detalles de una reseña específica. Requiere autenticación.
 *     tags: [Reseñas]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reseña
 *     responses:
 *       200:
 *         description: Detalles de la reseña obtenidos correctamente.
 *       404:
 *         description: Reseña no encontrada.
 */

/**
 * @swagger
 * /api/reseñas:
 *   post:
 *     summary: Crear una nueva reseña
 *     description: Permite crear una nueva reseña con los datos proporcionados. Requiere autenticación.
 *     tags: [Reseñas]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_usuario:
 *                 type: integer
 *                 example: 1
 *               id_excursion:
 *                 type: integer
 *                 example: 2
 *               calificacion:
 *                 type: integer
 *                 example: 5
 *               comentario:
 *                 type: string
 *                 example: "Gran experiencia, el guía fue excelente."
 *               fecha_reseña:
 *                 type: string
 *                 format: date
 *                 example: "2025-03-10"
 *     responses:
 *       201:
 *         description: Reseña creada con éxito.
 */

/**
 * @swagger
 * /api/reseñas/{id}:
 *   put:
 *     summary: Actualizar una reseña existente
 *     description: Modifica los detalles de una reseña existente. Requiere autenticación.
 *     tags: [Reseñas]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reseña
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_usuario:
 *                 type: integer
 *                 example: 1
 *               id_excursion:
 *                 type: integer
 *                 example: 2
 *               calificacion:
 *                 type: integer
 *                 example: 4
 *               comentario:
 *                 type: string
 *                 example: "Fue buena, pero el recorrido pudo ser más extenso."
 *               fecha_reseña:
 *                 type: string
 *                 format: date
 *                 example: "2025-03-11"
 *     responses:
 *       200:
 *         description: Reseña actualizada con éxito.
 */

/**
 * @swagger
 * /api/reseñas/{id}:
 *   delete:
 *     summary: Eliminar una reseña
 *     description: Elimina una reseña específica por su ID. Requiere autenticación.
 *     tags: [Reseñas]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reseña
 *     responses:
 *       200:
 *         description: Reseña eliminada con éxito.
 *       404:
 *         description: Reseña no encontrada.
 */


/**
 * @swagger
 * tags:
 *   name: Reservas
 *   description: Endpoints para la gestión de reservas
 */

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Obtener todas las reservas
 *     description: Retorna una lista con todas las reservas registradas. Requiere autenticación.
 *     tags: [Reservas]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de reservas obtenida correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_reserva:
 *                     type: integer
 *                     example: 1
 *                   id_usuario:
 *                     type: integer
 *                     example: 1
 *                   id_excursion:
 *                     type: integer
 *                     example: 2
 *                   fecha_reserva:
 *                     type: string
 *                     format: date
 *                     example: "2025-03-10"
 *                   cantidad_personas:
 *                     type: integer
 *                     example: 4
 *                   estado:
 *                     type: string
 *                     example: "confirmada"
 */

/**
 * @swagger
 * /api/reservas/{id}:
 *   get:
 *     summary: Obtener una reserva por ID
 *     description: Retorna los detalles de una reserva específica. Requiere autenticación.
 *     tags: [Reservas]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Detalles de la reserva obtenidos correctamente.
 *       404:
 *         description: Reserva no encontrada.
 */

/**
 * @swagger
 * /api/reservas:
 *   post:
 *     summary: Crear una nueva reserva
 *     description: Permite crear una nueva reserva con los datos proporcionados. Requiere autenticación.
 *     tags: [Reservas]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_usuario:
 *                 type: integer
 *                 example: 1
 *               id_excursion:
 *                 type: integer
 *                 example: 2
 *               fecha_reserva:
 *                 type: string
 *                 format: date
 *                 example: "2025-03-10"
 *               cantidad_personas:
 *                 type: integer
 *                 example: 4
 *               estado:
 *                 type: string
 *                 example: "confirmada"
 *     responses:
 *       201:
 *         description: Reserva creada con éxito.
 */

/**
 * @swagger
 * /api/reservas/{id}:
 *   put:
 *     summary: Actualizar una reserva existente
 *     description: Modifica los detalles de una reserva existente. Requiere autenticación.
 *     tags: [Reservas]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha_reserva:
 *                 type: string
 *                 format: date
 *                 example: "2025-03-15"
 *               cantidad_personas:
 *                 type: integer
 *                 example: 5
 *               estado:
 *                 type: string
 *                 example: "confirmada"
 *     responses:
 *       200:
 *         description: Reserva actualizada con éxito.
 */

/**
 * @swagger
 * /api/reservas/{id}:
 *   delete:
 *     summary: Eliminar una reserva
 *     description: Elimina una reserva específica por su ID. Requiere autenticación.
 *     tags: [Reservas]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Reserva eliminada con éxito.
 *       404:
 *         description: Reserva no encontrada.
 */


/**
 * @swagger
 * tags:
 *   name: Transporte Reservas
 *   description: Endpoints para la gestión de reservas de transporte
 */

/**
 * @swagger
 * /api/transporte_reserva:
 *   get:
 *     summary: Obtener todas las reservas de transporte
 *     description: Retorna una lista con todas las reservas de transporte registradas. Requiere autenticación.
 *     tags: [Transporte Reservas]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de reservas de transporte obtenida correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_reserva:
 *                     type: integer
 *                     example: 1
 *                   id_transporte:
 *                     type: integer
 *                     example: 2
 */

/**
 * @swagger
 * /api/transporte_reserva/{id_reserva}/{id_transporte}:
 *   get:
 *     summary: Obtener una reserva de transporte por ID
 *     description: Retorna los detalles de una reserva de transporte específica identificada por `id_reserva` y `id_transporte`. Requiere autenticación.
 *     tags: [Transporte Reservas]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_reserva
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva
 *       - in: path
 *         name: id_transporte
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del transporte
 *     responses:
 *       200:
 *         description: Detalles de la reserva de transporte obtenidos correctamente.
 *       404:
 *         description: Reserva de transporte no encontrada.
 */

/**
 * @swagger
 * /api/transporte_reserva:
 *   post:
 *     summary: Crear una nueva reserva de transporte
 *     description: Permite crear una nueva reserva de transporte con los datos proporcionados. Requiere autenticación.
 *     tags: [Transporte Reservas]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_reserva:
 *                 type: integer
 *                 example: 1
 *               id_transporte:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Reserva de transporte creada con éxito.
 */

/**
 * @swagger
 * /api/transporte_reserva/{id_reserva}/{id_transporte}:
 *   put:
 *     summary: Actualizar una reserva de transporte existente
 *     description: Modifica los detalles de una reserva de transporte existente. Requiere autenticación.
 *     tags: [Transporte Reservas]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_reserva
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva
 *       - in: path
 *         name: id_transporte
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del transporte
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               new_id_reserva:
 *                 type: integer
 *                 example: 3
 *               new_id_transporte:
 *                 type: integer
 *                 example: 4
 *     responses:
 *       200:
 *         description: Reserva de transporte actualizada con éxito.
 *       404:
 *         description: Reserva de transporte no encontrada.
 */

/**
 * @swagger
 * /api/transporte_reserva/{id_reserva}/{id_transporte}:
 *   delete:
 *     summary: Eliminar una reserva de transporte
 *     description: Elimina una reserva de transporte específica por su `id_reserva` y `id_transporte`. Requiere autenticación.
 *     tags: [Transporte Reservas]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_reserva
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva
 *       - in: path
 *         name: id_transporte
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del transporte
 *     responses:
 *       200:
 *         description: Reserva de transporte eliminada con éxito.
 *       404:
 *         description: Reserva de transporte no encontrada.
 */

/**
 * @swagger
 * tags:
 *   name: Transportes
 *   description: Endpoints para la gestión de transportes
 */

/**
 * @swagger
 * /api/transportes:
 *   get:
 *     summary: Obtener todos los transportes
 *     description: Retorna una lista con todos los transportes registrados.
 *     tags: [Transportes]
 *     responses:
 *       200:
 *         description: Lista de transportes obtenida correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_transporte:
 *                     type: integer
 *                     example: 1
 *                   tipo:
 *                     type: string
 *                     example: "Autobús"
 *                   capacidad:
 *                     type: integer
 *                     example: 50
 */

/**
 * @swagger
 * /api/transportes/{id}:
 *   get:
 *     summary: Obtener un transporte por ID
 *     description: Retorna los detalles de un transporte específico identificado por `id_transporte`.
 *     tags: [Transportes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del transporte
 *     responses:
 *       200:
 *         description: Detalles del transporte obtenidos correctamente.
 *       404:
 *         description: Transporte no encontrado.
 */

/**
 * @swagger
 * /api/transportes:
 *   post:
 *     summary: Crear un nuevo transporte
 *     description: Permite crear un nuevo transporte con los parámetros `tipo` y `capacidad`.
 *     tags: [Transportes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo:
 *                 type: string
 *                 example: "Camioneta"
 *               capacidad:
 *                 type: integer
 *                 example: 10
 *     responses:
 *       201:
 *         description: Transporte creado con éxito.
 */

/**
 * @swagger
 * /api/transportes/{id}:
 *   put:
 *     summary: Actualizar un transporte
 *     description: Modifica los detalles de un transporte existente, como el `tipo` y la `capacidad`.
 *     tags: [Transportes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del transporte a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo:
 *                 type: string
 *                 example: "Autobús"
 *               capacidad:
 *                 type: integer
 *                 example: 60
 *     responses:
 *       200:
 *         description: Transporte actualizado con éxito.
 *       404:
 *         description: Transporte no encontrado.
 */

/**
 * @swagger
 * /api/transportes/{id}:
 *   delete:
 *     summary: Eliminar un transporte
 *     description: Elimina un transporte específico identificado por `id_transporte`.
 *     tags: [Transportes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del transporte a eliminar
 *     responses:
 *       200:
 *         description: Transporte eliminado con éxito.
 *       404:
 *         description: Transporte no encontrado.
 */


/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Endpoints para la gestión de usuarios
 */

/**
 * @swagger
 * /api/usuarios:
 *   get:
 *     summary: Obtener todos los usuarios
 *     description: Retorna una lista con todos los usuarios registrados.
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_usuario:
 *                     type: integer
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     example: "Juan"
 *                   apellido:
 *                     type: string
 *                     example: "Pérez"
 *                   email:
 *                     type: string
 *                     example: "juan.perez@example.com"
 *                   telefono:
 *                     type: string
 *                     example: "123456789"
 *                   tipo:
 *                     type: string
 *                     example: "Cliente"
 */

/**
 * @swagger
 * /api/usuarios/{id}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     description: Retorna los detalles de un usuario específico identificado por `id_usuario`.
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Detalles del usuario obtenidos correctamente.
 *       404:
 *         description: Usuario no encontrado.
 */

/**
 * @swagger
 * /api/usuarios:
 *   post:
 *     summary: Crear un nuevo usuario
 *     description: Permite crear un nuevo usuario con los parámetros `nombre`, `apellido`, `email`, `telefono` y `tipo`.
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Carlos"
 *               apellido:
 *                 type: string
 *                 example: "Sánchez"
 *               email:
 *                 type: string
 *                 example: "carlos.sanchez@example.com"
 *               telefono:
 *                 type: string
 *                 example: "987654321"
 *               tipo:
 *                 type: string
 *                 example: "Administrador"
 *     responses:
 *       201:
 *         description: Usuario creado con éxito.
 */

/**
 * @swagger
 * /api/usuarios/{id}:
 *   put:
 *     summary: Actualizar un usuario
 *     description: Modifica los detalles de un usuario existente, como `nombre`, `apellido`, `email`, `telefono` y `tipo`.
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Sofia"
 *               apellido:
 *                 type: string
 *                 example: "González"
 *               email:
 *                 type: string
 *                 example: "sofia.gonzalez@example.com"
 *               telefono:
 *                 type: string
 *                 example: "555555555"
 *               tipo:
 *                 type: string
 *                 example: "Cliente"
 *     responses:
 *       200:
 *         description: Usuario actualizado con éxito.
 *       404:
 *         description: Usuario no encontrado.
 */

/**
 * @swagger
 * /api/usuarios/{id}:
 *   delete:
 *     summary: Eliminar un usuario
 *     description: Elimina un usuario específico identificado por `id_usuario`.
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a eliminar
 *     responses:
 *       200:
 *         description: Usuario eliminado con éxito.
 *       404:
 *         description: Usuario no encontrado.
 */



module.exports = router;
