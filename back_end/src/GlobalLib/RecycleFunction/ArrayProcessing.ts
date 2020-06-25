export const removeDuplicatesArray = (arr: any[]): any[] => {
  let tempArr: any[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (tempArr.length === 0) {
      tempArr.push(arr[i]);
    } else {
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
  }
  return tempArr;
};
