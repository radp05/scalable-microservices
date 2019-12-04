const Resource = require('../models/resource.model');
const helpers=require('../helpers/user.helper');


/**
 * @description This function is used for add new resource
 * @params { string } resourceName - resource name
 */

exports.addResource = async (req, res) => {
    try {
        let resource = new Resource({
            resourceName: req.body.resourceName
        })
        let result = await resource.save();

        return res.status(200).json({
            message: "Resource is successfully added.",
            data: result
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}
/**
 * @description This function is used for update the resource
 * @params { ObjectId } resourceId - resource mongo id to update
 * @params { String } resourceName - new resource name
 * @returns updated data
 */
exports.editResource = async (req, res) => {
    try {
   let result=await helpers.editUserResources(req)
        return res.status(200).json({
            message: "Successfully updated.",
            data: result
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}

exports.fetchResourceAll = async (req, res) => {
    try {
        let result=await helpers.getUserResources();
        return res.status(200).json({
            message: "Resource details",
            data: result
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}

exports.removeResource = async (req, res) => {
    try {
       await helpers.deleteUserResources(req);
        return res.status(200).json({
            message: "Resource is successfully deleted."
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: "error.message"
        });
    }
}

exports.fetchResourceById = async (req, res) => {
    try {

        let result= await helpers.getUserResource(req);      
        return res.status(200).json({
            message: "Resource detail",
            data: result
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}