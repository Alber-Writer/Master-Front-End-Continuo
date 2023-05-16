import { fillRange } from "./utils.js";

const createPagLink = (url, text, reqCallback) => {
  let element = document.createElement("a");
  element.id = text;
  element.href = "#"
  element.innerHTML = `${text}`;
  const pageNum = getUrlPageNumber(url);
  element.onclick = () => reqCallback(pageNum);
  return element
};

const getUrlPageNumber = (url) => {
  url = url ?? "?page=0";
  const pageNum = /\?page=(\d+)/;
  return url.match(pageNum)[1];
}

const createPagination = (info, callbackGoToApiUrlNumpage) => {//weno //goto API fn
  const { count, pages, next: nextUrl, prev: prevUrl } = info;
  const element = document.createElement("div");
  element.id = "pagination";
  element.innerHTML = `Total: ${count}, <p>Pages:</p>`;
  const prev = createPagLink(prevUrl, "prev", callbackGoToApiUrlNumpage);
  const next = createPagLink(nextUrl, "next", callbackGoToApiUrlNumpage);
  const current = document.createElement("p")


  const createGotoPageSelector = (pages) => {
    const goToPageSelector = document.createElement("select")
    goToPageSelector.id = "pageSelector";
    goToPageSelector.name = "pageSelector";
    const pagesCollection = fillRange(1, pages);

    pagesCollection.forEach((el, index) => {
      const option = document.createElement("option");
      option.text = (index + 1);
      option.value = (index + 1);
      goToPageSelector.add(option);
    })
    goToPageSelector.value = (getUrlPageNumber(nextUrl) === "0") ? pages : (getUrlPageNumber(nextUrl) - 1);
    return goToPageSelector
  }
  const pageSelector = createGotoPageSelector(pages);
  current.innerHTML = `/${pages}`;

  element.insertAdjacentElement("beforeend", prev)
  element.insertAdjacentElement("beforeend", pageSelector)
  element.insertAdjacentElement("beforeend", current)
  element.insertAdjacentElement("beforeend", next)

  pageSelector.onchange = () => {
    callbackGoToApiUrlNumpage(pageSelector.value)
  }
  return element;
};

const insertPagination = (currentPageInfo, apiCallbackHandler, destinationElement, position) => {
  const pagination = createPagination(currentPageInfo, apiCallbackHandler);//weno
  destinationElement.insertAdjacentElement(position, pagination);
}

export { insertPagination };
