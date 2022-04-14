const noteControllers= require('./../controllers/noteController')
const userController= require("./../controllers/userController")

const express= require('express')

const router= express.Router()

router.route("/").get(userController.protect, noteControllers.getAllNotes)
router.route("/:id").get(userController.protect, noteControllers.getNoteById)
router.route("/create").post(userController.protect, noteControllers.CreateNote)
router.route("/update/:id").patch(userController.protect, noteControllers.UpdateNote)
router.route("/delete/:id").delete(userController.protect, noteControllers.DeleteNote)

module.exports= router


