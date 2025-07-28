const express = require('express')
const router = express.Router()
const {getUser,createUser,updateUser,deleteUser} = require('../controller/userController')

router.get('/',getUser)

router.post('/create', createUser)

router.put('/',updateUser)

router.delete('/',deleteUser)

module.exports = router;