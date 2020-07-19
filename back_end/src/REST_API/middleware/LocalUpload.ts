import multer from "multer";
import { assetsLocation } from "../../GlobalLib/assets/im_here";

const upload = multer({ dest: assetsLocation() + "/uploadedFiles" });

export const localUploadProcessByMulter = upload.array("file");
export const localUploadResponse = (req: any, res: any) => {
  let fileNames: any[] = [];
  const { files } = req;
  if (files) {
    for (let i = 0; i < files.length; i++) {
      fileNames = fileNames.concat(files[i].filename);
    }
    res.json({ fileNames });
    console.log(fileNames);
  }
};
