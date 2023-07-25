//TODO:cambiar nombre por useSomethig...
import React from "react";
import { useParams } from "react-router-dom";

export const useOrganizationName = ()=>{
  const {urlOrganization} = useParams();
  const [organizationName, setOrganizationName] =
  React.useState(urlOrganization);
  return {organizationName, setOrganizationName};
}

export const usePagination = () => {
  const [pagIndex, setPagIndex] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(1);
  const [membersAtPage, setMembersAtPage] = React.useState([]);
  const [itemsPerPage, setItemsPerPage] = React.useState(3);

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
    membersAtPage,
    setMembersAtPage,
    itemsPerPage,
    setItemsPerPage,
    ListPagination,
  };
};