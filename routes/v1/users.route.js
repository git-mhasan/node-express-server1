const express = require("express");
const usersControllers = require("../../controllers/users.controller");
const validateNewUser = require("../../middleware/validateNewUser")
const validateId = require("../../middleware/validateId")
const verifyUpdate = require("../../middleware/verifyUpdate")
const router = express.Router();


router
  .route("/random")
  .get(usersControllers.getRandomUser)
// .post(usersControllers.saveATool);

router
  .route("/all")
  .get(usersControllers.getAllUser)

router
  .route("/save")
  .post(validateNewUser, usersControllers.saveOneUser)

router
  .route("/update/:id")
  .patch(validateId, usersControllers.updateUser)

router
  .route("/bulk-update")
// .put(validateId, usersControllers.deleteUser)


router
  .route("/delete/:id")
  .delete(validateId, usersControllers.deleteUser)


module.exports = router;
