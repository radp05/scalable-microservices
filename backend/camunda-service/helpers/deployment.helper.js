const rp = require('request-promise');
const fs = require('fs');
const path = require('path');

exports.fileUpload = async (req) => {
    const file = await req.files.file.mv(path.join('tmp') + '/' + req.files.file.name);
    return file;
}

exports.removeUploadedFile = (req) => {
    fs.unlinkSync(path.join('tmp') + '/' + req.files.file.name);
    return;
}

exports.deploy = async (req) => {
    console.log(path.join('tmp') + '/' + req.files.file.name);
    const options = {
        method: 'POST',
        uri: `${process.env.CAMUNDA_BASE_URL}/deployment/create`,
        formData: {
            file: {
                value: fs.createReadStream(path.join('tmp') + '/' + req.files.file.name),
                options: {
                    filename: req.files.file.name,
                    contentType: 'application/xml'
                }
            }
        }
    }
    const result = await rp(options);
    return result;
}