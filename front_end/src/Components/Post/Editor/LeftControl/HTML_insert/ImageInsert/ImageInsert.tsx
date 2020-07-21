import "./ImageInsert.scss";

export const ImgHtmlInsert = (address: string) => {
  return new Promise((sol, jec) => {
    const imgHtml = /*html*/ `
    <div><br></div>
    <img src='${address}' class="InsertedImg" ></img>
    <div><br></div>`;
    document.execCommand("insertHTML", false, imgHtml);
    sol("");
  });
};
