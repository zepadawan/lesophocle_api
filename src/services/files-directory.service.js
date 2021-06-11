import fs from 'fs';
import dirpath from 'path';

export function readDirectory(req, res, next) {
  const folder = req.body.folder;
  const uploadPath = dirpath.join(__dirname, "/public/images/", folder);
  console.log(uploadPath);
  let files = fs.readdirSync(uploadPath);
  res.send({
    status: true,
    message: 'Files found !',
    files: files,
  });
  return files;
};

export default (
  readDirectory
);


