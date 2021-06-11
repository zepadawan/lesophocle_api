import express from 'express';
import dirpath from 'path';
import fileUpload from 'express-fileupload';

const app = express();
app.use(fileUpload({ createParentPath: true }));

export async function uploadService(req, res, next) {
  if (!req.files) {
    console.log('no req.files');
    res.send({
      status: false,
      message: 'No file uploaded'
    });
    return;
  } else {
    var image = req.files.sampleFile;
    var pathImage = req.body.pathImage;
    let sampleFile = req.files.sampleFile;
    const uploadPath = dirpath.join(__dirname, "/public/images/", pathImage, sampleFile.name);
    console.log(uploadPath);
    sampleFile.mv(uploadPath);
    res.send({
      status: true,
      message: 'File is uploaded',
      data: {
        name: sampleFile.name,
        mimetype: sampleFile.mimetype,
        size: sampleFile.size
      }
    });

  }
  renameFile();
}

function renameFile() {

  console.log(__dirname);


}


export default (uploadService);
