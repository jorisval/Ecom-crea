const express = require('express');
const adminCtrl = require('../controllers/admin');
const router = express.Router();
const auth = require('../midleware/auth');

router.post('/register/', auth, adminCtrl.registerAdmin);
router.get('/login/', auth, adminCtrl.loginAdmin);
router.get('/:adminId', auth, adminCtrl.getAdminById);
router.put('/:admibId', auth, adminCtrl.updateAdmin);
router.delete('/:adminId', auth, adminCtrl.deleteAdmin);
router.get('/', auth, adminCtrl.getAllAdmins);

module.exports = router;