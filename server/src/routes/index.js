/*controllers */
const { getAllCountries } = require("../handlers/countriesHandlers");
const { getCountryById } = require("../handlers/countriesHandlers");
const { createActivity } = require("../controllers/activityControllers");
const { getAllActivities } = require("../handlers/activitiesHandlers");
const { getSomeOfLife } = require("../handlers/countriesHandlers");

/*express config */
const { Router } = require("express");
const router = Router();

/*routes*/
router.get("/countries", getAllCountries); //incluir por query
router.get("/countries/:id", getCountryById);
router.post("/activities", createActivity);
router.get("/activities", getAllActivities)


// Mover la ruta getSomeOfLife al final
router.get("/", getSomeOfLife);

module.exports = router;

