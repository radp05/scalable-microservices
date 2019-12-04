
const helpers=require('../helpers/user.helper');

/**
 * @description This function is used for add new group
 * @params { string } groupName - group name
 */

exports.addGroup = async (req, res) => {
    try {

        let result=await helpers.addUserGroup(req)
        return res.status(200).json({
            message: "group is successfully added.",
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
 * @description This function is used for update the group
 * @params { ObjectId } groupId - group mongo id to update
 * @params { String } groupName - new group name
 * @returns updated data
 */
exports.editGroup = async (req, res) => {
    try {
        let result=await helpers.editUserGroup(req);
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

exports.fetchGroupAll = async (req, res) => {
    try {
       

        let result=await helpers.getUserGroups(req)

        return res.status(200).json({
            message: "group details",
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
 * @description - This function is used for fetch group details
 * @params - {objectId} groupId - group mongoId
 * @returns - {object} result
 */
exports.fetchGroupDetails = async (req, res) => {
    try {
       let result=await helpers.getUserGroups(req);
        return res.status(200).json({
            message: "group details",
            data: result[0]
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}

exports.removeGroup = async (req, res) => {
    try {
        await helpers.deleteUserGroup(req);
        return res.status(200).json({
            message: "group is successfully deleted."
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: "error.message"
        });
    }
}





