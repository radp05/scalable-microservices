const csvHelper = require('../helpers/csv.helper')


exports.generateCSV = async (req, res) => {
    // console.log(req.body)
    try {
        const doc = await csvHelper.generateCSV(req.body);

        res.writeHead(200,
            {
                'Content-type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition': 'attachment;filename="csvFile.csv"'
            });
        try {
            const download = await doc.csv.writeBuffer()
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