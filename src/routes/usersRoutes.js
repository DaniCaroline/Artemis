const { Router } = require('express')
const router = Router()

const listUsersController = require("../controllers/users/list");
const createUserController = require("../controllers/users/create");
const updateUserController = require("../controllers/users/update");
const deleteUserController = require("../controllers/users/delete");

router.get("/", listUsersController);
router.post("/", createUserController)
router.put("/:id", updateUserController)
router.delete("/:id", deleteUserController)

module.exports = router