import { typeNameCutting } from "../MediaUploadLib";

export const BatchInfoMidPros = (files: any) => {
  const spreadedFileInfo: any[] = [...files.current];
  let names: any[] = [];
  if (files.current) {
    for (let i = 0; i < files.current.length; i++) {
      names = names.concat([[i, spreadedFileInfo[i].name]]);
    }
  }
  return names;
};

export const argsProcess = (files: any) => {
  let caption: string[] = [];
  let volume: number[] = [];
  let type: string[] = [];
  if (files.current) {
    for (let i = 0; i < files.current.length; i++) {
      caption = caption.concat(files.current[i].name);
      volume = volume.concat(files.current[i].size);
      type = type.concat(typeNameCutting(files.current[i].type));
    }
  }
  return { caption, volume, type };
};
