export const DefaultNumPros = (files: any, DC: any): number[] => {
  let DefaultNum: number[] = [];
  if (files) {
    for (let i = 0; i < files.length; i++) {
      DefaultNum = DefaultNum.concat(DC.Location);
    }
  }
  return DefaultNum;
};

export const totalVolum = (files: any): number => {
  let Tvalue = 0;
  for (let i = 0; i < files.current.length; i++) {
    Tvalue = Tvalue + files.current[i].size;
  }
  return Tvalue;
};
export const typeNameCutting = (typeName: string): string => {
  let reUnion: string = "";
  if (typeName.indexOf("/") < 0) {
    reUnion = typeName;
  } else {
    const Stg_part: string[] = typeName.split("/");
    reUnion = Stg_part[1];
  }
  return reUnion;
};
