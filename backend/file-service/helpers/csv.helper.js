var Excel = require('exceljs');

function _formatCSV(csvData) {
    return new Promise((resolve, reject) => {
        var workbook = new Excel.Workbook();

        var worksheet = workbook.addWorksheet('My Sheet');
        cols = [];

        csvData.data.header.forEach((col) => {
            cols.push({ header: col, key: col })
        })
        worksheet.columns = cols;
        var rows = csvData.data.rows;
        worksheet.addRows(rows);
        resolve(workbook)
    })

}

exports.generateCSV = (csvData) => {
    // console.log(csvData)

    return new Promise(async (resolve, reject) => {
        try {
            const doc = await _formatCSV(csvData);
            console.log(doc)
            resolve(doc);
        } catch (err) {
            console.log(err);
            reject(err);
        }
    });
};