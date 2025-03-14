import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  FilterFn,
} from "@tanstack/react-table";

import DATA from "../../../public/data.json";
import { LeadData } from "../../shared/types/Leads";
import MainTable from "../../shared/components/Table";
import { toggleDarkMode } from "../../shared/utils/themeUtils";
import GlobalSearch from "../../shared/components/GlobalSearch";
import { columns } from "../../shared/defs/columnDefs";

const globalFilterFn: FilterFn<LeadData> = (row, columnId, filterValue) => {
  const value = row.getValue(columnId);
  return String(value)
    .toLowerCase()
    .includes(String(filterValue).toLowerCase());
};

const pageSizes = [10, 25, 50, 150];

const Dashboard: React.FC = () => {
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: pageSizes[0],
  });

  const table = useReactTable({
    data: DATA.data,
    columns,
    state: {
      globalFilter,
      pagination,
    },
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    globalFilterFn,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold leading-tight dark:text-gray-200">
              Leads
            </h2>
            <GlobalSearch
              setGlobalFilter={setGlobalFilter}
              globalFilter={globalFilter}
            />
          </div>
          <button className="dark:text-gray-200" onClick={toggleDarkMode}>
            DM
          </button>
          <MainTable table={table} />
        </div>
      </div>

      <div className="mt-4">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>

        <span className="mx-4">
          Page <strong>{table.getState().pagination.pageIndex + 1}</strong> of{" "}
          {table.getPageCount()}
        </span>

        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
          className="px-2 py-1 border border-gray-300 rounded"
        >
          {pageSizes.map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Dashboard;
