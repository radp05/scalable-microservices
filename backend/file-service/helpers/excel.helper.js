var Excel = require('exceljs');

function _formatExcel(excelData) {
    return new Promise((resolve, reject) => {
        var workbook = new Excel.Workbook();

        var worksheet = workbook.addWorksheet('My Sheet');
        cols = [];

        excelData.data.header.forEach((col) => {
            cols.push({ header: col, key: col })
        })
        worksheet.columns = cols;
        var rows = excelData.data.rows;
        worksheet.addRows(rows);
        resolve(workbook)
    })

}

exports.generateExcel = (excelData) => {
    // console.log(excelData)

    return new Promise(async (resolve, reject) => {
        try {
            const doc = await _formatExcel(excelData);
            console.log(doc)
            resolve(doc);
        } catch (err) {
            console.log(err);
            reject(err);
        }
    });
};