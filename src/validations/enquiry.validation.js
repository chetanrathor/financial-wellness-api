const { Joi } = require('express-validation')
module.exports = {

    addNewEquiry: {
        body: Joi.object({
            fullName: Joi.string().required(),
            email:Joi.string().email().required(),
            contact:Joi.string().required(),
            message:Joi.string().required()
        })
    },
   
    





}
