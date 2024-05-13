const express = require('express');
const router = express.Router();
const mailController=require('../controllers/mail');

router.get('/',mailController.get_send_mail);
router.post('/',mailController.post_send_mail);

module.exports=router;