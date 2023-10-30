const {  addNewEnquiry,getAllEnquiries } = require('../services/enquiry.service')
const { getSuccessResponse, getFailureResponse } = require('../utils')
module.exports = {
    getAllEnquiry: async (request, response) => {
        try {
            const data = await getAllEnquiries()
            getSuccessResponse({ request, response, data })
        }
        catch (error) {
            getFailureResponse({ request, response, error })
        }
    },
    addOneEnquiry: async (request, response) => {
        try {
            const { body } = request
            const data = await addNewEnquiry(body)
            response.setHeader('Content-Type', 'text/html');
            response.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
            getSuccessResponse({ request, response, data })
        }
        catch (error) {
            getFailureResponse({ request, response, error })
        } 
    },
 
}