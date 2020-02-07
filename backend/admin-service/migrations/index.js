"use strict";
const userModel = require('../models/user.model')
const groupModel = require('../models/group.model')
const userHelpers = require("../helpers/user.helper");
const groupHelpers = require("../helpers/group.helper");
const bcryptHelpers = require('../helpers/bcrypt.helper')


exports.createUser = async () => {
    try {
        let isUserExist = await userModel.estimatedDocumentCount({});
        if (!isUserExist) {
            try {
                let groupDetails = await groupModel.findOne({ 'groupName': 'Admin-Group' })
                if (!groupDetails) {
                    const formGroup = {
                        body: {
                            groupName: 'Admin-Group',
                            resourceIds: ['*']
                        }
                    };

                    let groupDetails = await groupHelpers.addUserGroup(formGroup)

                }

                const form = {
                    "password": "12345",
                    "confirm": "12345",
                    "firstName": "MS",
                    "lastName": "ADMIN",
                    "email": "INCEDO-MS-ADMIN@gmail.com",
                    "role": "MS-ADMIN",
                    "groupId": groupDetails.groupId,
                    "userName": "MS-ADMIN"
                };
                form.groupId = form.groupId;
                let hash = bcryptHelpers.generatePassword(form.password)
                form.password = hash
                let result = await userHelpers.createUsr(form);

            } catch (error) {
                console.log(error)
            }
        }

    } catch (err) {
        console.log(err)
    }
}