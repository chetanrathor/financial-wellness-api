const { Schema, default: mongoose } = require('mongoose')
const enquirySchema = new Schema({    

    fullName: String,
    email: String,
    contact: String,
    message: String,

})
enquirySchema.path('_id')
module.exports = mongoose.model('Enquiry',enquirySchema)