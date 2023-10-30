const Enquiry = require('../models/enquiry.model')
const { getRandomNumber } = require('../utils')
const { Schema, default: mongoose } = require('mongoose')
module.exports = {
    getAllEnquiries: () => {

        return Enquiry.find({})
    },
    addNewEnquiry: async (enquiry) => {
        const newEnquiry = new Enquiry()
        newEnquiry.fullName = enquiry.fullName
        newEnquiry.email = enquiry.email
        newEnquiry.contact = enquiry.contact
        newEnquiry.message = enquiry.message
        return await newEnquiry.save()

    }
}