export default async (postProsed: any[]) => {
  let tempArr: any[] = [postProsed[0]];
  for (let i = 1; i < postProsed.length; i++) {
    let duplicatesFlag = true;
    for (let j = 0; j < tempArr.length; j++) {
      if (tempArr[j].post_id === postProsed[i].post_id) {
        duplicatesFlag = false;
        break;
      }
    }
    if (duplicatesFlag) {
      tempArr = tempArr.concat(postProsed[i]);
    }
  }

  return tempArr;
};
