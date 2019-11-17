const Device = require('../models/device.model')

exports.insertDevice = async function create(deviceName, deviceType, deviceIp) {
    try {
        let device = new Device({
            deviceName: deviceName,
            deviceType: deviceType,
            deviceIp: deviceIp
        });
        let doc = await device.save();
        return { "status": 1, "data": doc };
    } catch (error) {
        return { "status": 0, "data": error };
    }
}

exports.update = async function update(_id, deviceName, deviceType, deviceIp) {
    try {
        const filter = { _id: _id };
        const update = { deviceName: deviceName, deviceType: deviceType, deviceIp: deviceIp };
        let doc = await Device.findOneAndUpdate(filter, update, {
            new: true
        });
        if (doc == null) {
            return { "status": 1, "data": null };
        }
        else {
            return { "status": 1, "data": doc };
        }
    }
    catch (error) {
        return { "status": 0, "data": error };
    }
}

exports.delete = async function remove(_id) {
    try {
        let count = await Device.count({ _id: _id })
        if (count) {
            let doc = await Device.findOneAndDelete({ _id })
            return { "status": 1, "data": "success" };
        }
        return { "status": 1, "data": null };
    }
    catch (error) {
        return { "status": 0, "data": error };
    }
}

exports.list = async function list() {
    try {
        let devices = await Device.find({});
        return { "status": 1, "data": devices }
    }
    catch (error) {
        return { "status": 0, "data": error };
    }
}

exports.getRecord = async function getRecord(_id) {
    try {
        let devices = await Device.findOne({ _id: _id });
        return { "status": 1, data: devices }
    }
    catch (error) {
        return { "status": 0, "data": error };
    }
}