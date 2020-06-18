export const ImgInfoReturn = (URI: string) => {
  let image = new Image();
  image.src = URI;
  image.onload = () => {
    const wid: any = image.width;
    const heig: any = image.height;
    return { wid, heig };
  };
};
