const userController= require('./../controllers/userController')

const express= require('express')

const router= express.Router()

router.route("/signup").post(userController.signUp);
router.post("/signin", userController.signIn);
router.route("/profile").post(userController.protect, userController.updateUserProfile);

module.exports= router
