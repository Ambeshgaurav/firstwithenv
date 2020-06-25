const router = require("express").Router();
const controller= require('../controller/controller')
const authentication= require('../middleware/auth')







router.post('/createMysql',controller.createMysql );
router.post('/ReadmMysql', controller.readMysql);
router.post('/updateMysql', controller.updateMysql);
router.post('/deleteMysql', controller.deleteMysql);
router.post('/createMongodb', controller.createMongodb);
router.post('/ReadMongodb', controller.readMongodb);
router.post('/updateMongodb', controller.updateMongodb);
router.post('/deleteMongodb', controller.deleteMongodb);
router.post('/genrateToken', controller.genrateTokenApi);
router.post('/authenticationApi',authentication.authenticateToken,controller.verifyAuthAPi);


module.exports = router;