const express=require('express');
const router=express.Router();

const { handleAppointmentForm } = require('../controllers/appointmentController');

router.post('/', handleAppointmentForm);

module.exports=router;