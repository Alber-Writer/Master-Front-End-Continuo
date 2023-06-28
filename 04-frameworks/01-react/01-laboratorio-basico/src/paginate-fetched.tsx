import React, { useRef } from "react";
import { MemberEntity } from "./model";
import { UserListRows } from "./user-list-rows";
import { ItemsPerPageSelector } from "./items-per-page-selector";
import { usePagination } from "./custom-hooks";

interface Props {
  children?: React.ReactNode;
  organizationName: string;
  members: MemberEntity[];
}

export const PaginateFetchedCollection: React.FC<Props> = (props: Props) => {
  const { organizationName, members } = props;
  const {
    pagIndex,
    setPagIndex,
    totalPages,
    setTotalPages,
    membersAtPage,
    setMembersAtPage,
    itemsPerPage,
    setItemsPerPage,
    ListPagination,
  } = usePagination();

  React.useEffect(() => {
    const { paginatedList, pagesQty } = ListPagination<MemberEntity>(
      members,
      Number(itemsPerPage)
    );
    setMembersAtPage(paginatedList[pagIndex] ?? members);
    setTotalPages(pagesQty);
    //First load has members.length = 0, next "if" checks it out to avoid render pageIndex=0.
    if (members.length > 0 && itemsPerPage > members.length) {
      setPagIndex(pagesQty - 1);
    }
  }, [members, pagIndex, itemsPerPage]);

  return (
    <>
      <p className="members-at-org">
        {organizationName.toLocaleUpperCase()} has {members.length} members on
        GitHub.
      </p>
      <UserListRows
        listToRender={membersAtPage}
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
          itemsPerPage={itemsPerPage}
          handleSetItemsPerPage={setItemsPerPage}
        />
      </div>
    </>
  );
};
