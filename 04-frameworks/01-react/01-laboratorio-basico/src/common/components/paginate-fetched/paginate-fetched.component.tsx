import React from "react";

import { usePagination } from "./hooks/usePagination.hooks";

import { ListRows } from "@/pods/list/components/list-rows.component";
import { ItemsPerPageSelector } from "./components/items-per-page-selector.component";

import { Button } from "@/common/components/button";
import { Box } from "@/common/components/box";

interface Props {
  children?: React.ReactNode;
  //Key or param to navigate back, when accesing deeper layers:
  backLinkParentKey?: string; 
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
    //First load has an items.length = 0. Next "if" checks it out, to avoid render pageIndex=0.
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            margin: "1rem",
          }}
        >
          <Button
            variant="outlined"
            id="prev"
            onClick={() => {
              pagIndex <= 0 ? pagIndex : setPagIndex(pagIndex - 1);
            }}
          >
            Prev
          </Button>
          <p>
            Page: {pagIndex + 1} / {totalPages}
          </p>

          <Button
            variant="outlined"
            id="next"
            onClick={() => {
              pagIndex >= totalPages - 1
                ? totalPages
                : setPagIndex(pagIndex + 1);
            }}
          >
            Next
          </Button>
        </Box>
        <ItemsPerPageSelector
          itemsPerPage={itemsQtyPerPage}
          handleSetItemsPerPage={setItemsQtyPerPage}
        />
      </div>
    </>
  );
};
