const router=require('express').Router() 
const employedFunctions=require('./controllers/employed')

router.post('/checkPermission', employedFunctions.checkPermission)
router.get('/getAllEmployed', employedFunctions.getAllEmployed)
router.get('/getEmployedById/:id', employedFunctions.getEmployedById)
router.post('/setNewEmployed', employedFunctions.setNewEmployed)
router.post('/updateEmployed/:id', employedFunctions.updateEmployed)

module.exports=router