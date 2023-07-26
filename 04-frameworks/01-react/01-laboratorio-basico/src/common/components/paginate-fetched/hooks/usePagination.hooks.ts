import React from "react";

export const usePagination = () => {
  const [pagIndex, setPagIndex] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(1);
  const [itemsAtPage, setItemsAtPage] = React.useState([]);
  const [itemsQtyPerPage, setItemsQtyPerPage] = React.useState(3);

  const ListPagination = function <T>(
    arrayToPaginate: T[],
    itemsPerPage: number
  ) {
    let paginatedList = [];
    const pagesQty = Math.ceil(arrayToPaginate.length / itemsPerPage);
    for (let i = 0; i < arrayToPaginate.length; i += itemsPerPage) {
      const chunk = arrayToPaginate.slice(i, i + itemsPerPage);
      paginatedList = [...paginatedList, [...chunk]];
    }
    return { paginatedList, pagesQty };
  };
  return {
    pagIndex,
    setPagIndex,
    totalPages,
    setTotalPages,
    itemsAtPage,
    setItemsAtPage,
    itemsQtyPerPage,
    setItemsQtyPerPage,
    ListPagination,
  };
};