var PdfPrinter = require('pdfmake');
const fs = require('fs');
// var pdfFonts = require('vfs_fonts');

const fonts = {
    Roboto: {
        normal: 'fonts/Roboto-Regular.ttf',
        bold: 'fonts/Roboto-Medium.ttf',
        italics: 'fonts/Roboto-Italic.ttf',
        bolditalics: 'fonts/Roboto-MediumItalic.ttf'
    }
};


function _generatePDF(docDefinition) {
    return new Promise((resolve, reject) => {
        const printer = new PdfPrinter(fonts);
        const pdfDoc = printer.createPdfKitDocument(docDefinition);
        // Converting to Binaries
        let chunks = []
        let result = null

        pdfDoc.on('data', function (chunk) {
            chunks.push(chunk)
        })

        pdfDoc.on('end', function () {
            result = Buffer.concat(chunks)
            result = result.toString('base64')
            resolve(result);
        })

        pdfDoc.end()

    }, err => {
        reject(err)
    });
}

function _formatTableData(tableData) {
    return new Promise((resolve, reject) => {
        tData = {}
        tHeader = []
        tableData.header.forEach((val) => {
            tHeader.push({ text: val, fontSize: 15, bold: true })
        })

        tRows = []

        tableData.rows.forEach((object) => {
            temp = [];
            for (let i = 0; i < tableData['header'].length; i++) {
                temp.push(object[tableData.header[i]]);
            }
            tRows.push(temp);

        })
        tData['body'] = [];
        tData['body'].push(tHeader);
        tData['body'].push(...tRows);
        table = {}
        table['table'] = tData;

        resolve(table)

    }, err => {
        reject(err)
    });

}

function _formatPDF(pdfData) {
    return new Promise((resolve, reject) => {
        const docDefinition = {};
        content = [];
        pdfData.data.forEach(async (object) => {
            switch (object.type) {
                case 'heading':
                    content.push({ text: object.data, fontSize: 18, bold: true });
                    break;
                case 'subheading':
                    content.push({ text: object.data, fontSize: 15, bold: true });
                    break;
                case 'text':
                    content.push({ text: object.data });
                    break;
                case 'image':
                    content.push({ image: object.data, width: 200, height: 200 });
                    break;
                case 'table':
                    try {
                        tableData = await _formatTableData(object.data);
                        content.push(tableData);
                    } catch (err) {
                        console.log(err);
                    }
                    break;
            }
        });
        docDefinition['content'] = content;
        resolve(docDefinition)

    });
}


exports.generatePDF = (pdfData) => {

    return new Promise(async (resolve, reject) => {
        try {
            const docDefinition = await _formatPDF(pdfData);
            const doc = await _generatePDF(docDefinition);
            resolve(doc);
        } catch (err) {
            console.log(err);
            reject(err);
        }
    });
};