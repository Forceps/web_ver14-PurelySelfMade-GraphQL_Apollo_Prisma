import path from "path";

export const assetsLocation = () => __dirname;

export const binaryFileLocation = (fileName: string) => {
  return path.join(assetsLocation() + "/uploadedFiles" + `/${fileName}`);
};
