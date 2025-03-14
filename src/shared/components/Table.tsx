import { flexRender, Table } from "@tanstack/react-table";

import { LeadData } from "../types/Leads";

export default function MainTable({ table }: { table: Table<LeadData> }) {
  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    scope="col"
                    className="
                      px-5 py-3
                      border-b-2 border-gray-200
                      bg-gray-100
                      text-left text-xs font-semibold
                      text-gray-700 uppercase tracking-wider
                      dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200
                    "
                    key={header.id}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                className="
                  bg-white hover:bg-slate-50
                  dark:bg-gray-800 dark:hover:bg-gray-700
                "
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    className="
                      px-5 py-5
                      border-b border-gray-200
                      text-sm
                      dark:border-gray-700 dark:text-gray-300
                    "
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
