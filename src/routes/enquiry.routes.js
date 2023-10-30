const router = require('express').Router()
const { validate } = require('express-validation')
const { getOneEnquiry, addOneEnquiry, getAllEnquiry } = require('../controllers/enquiry.controller')
const { addNewEquiry } = require('../validations/enquiry.validation')
/**
 All the routes related to enquiry module will be here.
 */

router.get('/', (request, response) => getAllEnquiry(request, response))
router.post('/', validate(addNewEquiry), (request, response) => addOneEnquiry(request, response))
router.get('/:id',(request,response)=>getOneEnquiry(request, response))


module.exports = router