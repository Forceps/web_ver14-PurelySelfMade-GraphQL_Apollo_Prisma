export const AnchorInsert = (address: string, object: string) => {
  return new Promise((sol, jec) => {
    const a_tag_Html = /*html*/ `<a href='${address}' target='_blank'>${object}</a>`;
    document.execCommand("insertHTML", false, a_tag_Html);
    sol("");
  });
};
