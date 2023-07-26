import React, { useRef } from "react";
import { MemberEntityVM } from "@/pods/list/list.vm";
import { UserListRows } from "@/pods/list/components/user-list-rows.component";
import { ItemsPerPageSelector } from "./components/items-per-page-selector.component";
import { usePagination } from "./hooks/usePagination.hooks";

interface Props {
  children?: React.ReactNode;
  organizationName?: string;
  items: MemberEntityVM[];//TODO: generic type! not MemberEntity
  //TODO:make it agnostic
}
//TODO: agnostic organization name

export const PaginateFetchedCollection: React.FC<Props> = (props: Props) => {
  const { organizationName, items: members } = props;
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
    const { paginatedList, pagesQty } = ListPagination<MemberEntityVM>(
      members,
      Number(itemsQtyPerPage)
    );
    setItemsAtPage(paginatedList[pagIndex] ?? members);
    setTotalPages(pagesQty);
    //First load has members.length = 0, next "if" checks it out to avoid render pageIndex=0.
    if (members.length > 0 && itemsQtyPerPage > members.length) {
      setPagIndex(pagesQty - 1);
    }
  }, [members, pagIndex, itemsQtyPerPage]);

  return (
    <>
      <UserListRows
        listToRender={itemsAtPage}
        organization={organizationName}
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
