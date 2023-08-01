import React from "react";
import { ListRows } from "@/pods/list/components/list-rows.component";
import { ItemsPerPageSelector } from "./components/items-per-page-selector.component";
import { usePagination } from "./hooks/usePagination.hooks";

interface Props {
  children?: React.ReactNode;
  backLinkParentKey?: string;//Key or param to navigate back, when accesing deeper layers
  items: [];
}

export const PaginateFetchedCollection: React.FC<Props> = (props: Props) => {
  const { backLinkParentKey: organizationName, items } = props;
  const {
    pagIndex,
    setPagIndex,
    totalPages,
    setTotalPages,
    itemsAtPage,
    setItemsAtPage,
    itemsQtyPerPage,
    setItemsQtyPerPage,
    ListPagination,
  } = usePagination();

  React.useEffect(() => {
    const { paginatedList, pagesQty } = ListPagination(
      items,
      Number(itemsQtyPerPage)
    );
    setItemsAtPage(paginatedList[pagIndex] ?? items);
    setTotalPages(pagesQty);
    //First load has items.length = 0, below "if" checks it out, to avoid render pageIndex=0.
    if (items.length > 0 && itemsQtyPerPage > items.length) {
      setPagIndex(pagesQty - 1);
    }
  }, [items, pagIndex, itemsQtyPerPage]);

  return (
    <>
    {props.children}
      <ListRows
        listToRender={itemsAtPage}
        backLinkParentKey={organizationName}
      />
      <div className="pagination">
        <div className="page-nav">
          <button
            id="prev"
            onClick={() => {
              pagIndex <= 0 ? pagIndex : setPagIndex(pagIndex - 1);
            }}
          >
            Prev
          </button>
          <p>
            Page: {pagIndex + 1} / {totalPages}
          </p>

          <button
            id="next"
            onClick={() => {
              pagIndex >= totalPages - 1
                ? totalPages
                : setPagIndex(pagIndex + 1);
            }}
          >
            Next
          </button>
        </div>
        <ItemsPerPageSelector
          itemsPerPage={itemsQtyPerPage}
          handleSetItemsPerPage={setItemsQtyPerPage}
        />
      </div>
    </>
  );
};
