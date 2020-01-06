const excelHelper = require('../helpers/excel.helper')


exports.generateExcel = async (req, res) => {
    // console.log(req.body)
    try {
        const doc = await excelHelper.generateExcel(req.body);

        res.writeHead(200,
            {
                'Content-type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition': 'attachment;filename="excelFile.xlsx"'
            });
        try {
            const download = await doc.xlsx.writeBuffer()
            res.end(download);

        } catch (err) {

            res.send({ "Error": err })
        }



    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Failure",
            error: err
        })
    }
}