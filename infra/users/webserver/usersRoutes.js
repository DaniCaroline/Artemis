const { Router } = require('express')
const router = Router()

const listUsersController = require("../../../interfaces/users/controllers/list");
const createUserController = require("../../../interfaces/users/controllers/create");
const updateUserController = require("../../../interfaces/users/controllers/update");
const deleteUserController = require("../../../interfaces/users/controllers/delete");

router.get("/", listUsersController);
router.post("/", createUserController)
router.put("/:id", updateUserController)
router.delete("/:id", deleteUserController)

module.exports = router