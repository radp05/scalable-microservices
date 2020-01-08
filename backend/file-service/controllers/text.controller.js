
exports.generateText = async (req, res) => {

    try {
        res.writeHead(200,
            {
                'Content-Disposition': 'attachment;filename="textFile.txt"'
            });
        res.end(req.body.data);
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Failure",
            error: err
        })
    }
}