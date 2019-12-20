const pdfHelper = require('../helpers/pdf.helper')


exports.generatePdf = async (req, res) => {
  // console.log(req.body)
  try {
    const doc = await pdfHelper.generatePDF(req.body);

    res.writeHead(200,
      {
        'Content-type': 'application/pdf',
        'Content-Disposition': 'attachment;filename="pdfFile.pdf"'
      });
    const download = Buffer.from(doc.toString('utf-8'), 'base64');
    res.end(download);



  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: "Failure",
      error: err
    })
  }
}