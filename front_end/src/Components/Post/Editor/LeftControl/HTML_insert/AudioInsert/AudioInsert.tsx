import "./AudioInsert.scss";

export const AudioHtmlInsert = (address: string) => {
  return new Promise((sol, jec) => {
    if (address) {
      const AudioHtml = /*html*/ `
      <div><br></div>
      <audio controls>
        <source src="${address}" >
      </audio>
      <div><br></div>`;
      document.execCommand("insertHTML", false, AudioHtml);
    }
    sol("");
  });
};
