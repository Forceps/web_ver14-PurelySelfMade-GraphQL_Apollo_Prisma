export const removeDuplicatesArray = (arr: any[]): any[] => {
  let tempArr: any[] = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    let duplicatesFlag = true;
    for (let j = 0; j < tempArr.length; j++) {
      if (tempArr[j] === arr[i]) {
        duplicatesFlag = false;
        break;
      }
    }
    if (duplicatesFlag) {
      tempArr.push(arr[i]);
    }
  }
  return tempArr;
};
