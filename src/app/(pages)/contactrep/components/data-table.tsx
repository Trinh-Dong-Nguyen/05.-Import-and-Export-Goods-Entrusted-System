"use client";

import * as React from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Skeleton } from "@/components/ui/skeleton";
import { CirclePlus } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../../../../components/ui/button";
import { DataTableFilter } from "./data-filter";
import { DataTablePagination } from "./data-pagination";
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  totalPages: number;
  data: TData[];
  error: Error | null;
  isPending: boolean;
  queryParams: ContactRepQueryParams;
  setQueryParams: React.Dispatch<React.SetStateAction<ContactRepQueryParams>>;
}

export function DataTable<TData, TValue>({
  columns,
  totalPages,
  data,
  isPending,
  queryParams,
  setQueryParams,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] =
    React.useState<ColumnFiltersState>([]);
  const router = useRouter();
  const path = usePathname();

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    pageCount: totalPages,

    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      pagination: {
        pageIndex: (queryParams.page ?? 1) - 1,
        pageSize: queryParams.limit ?? 1,
      },
    },
  });

  const filterableColumns = queryParams ? Object.keys(queryParams) : [];

  return (
    <div className="w-full">
      <div className="flex w-full justify-between pb-[10px] mb-[20px]">
        <DataTableFilter
          filterableColumns={filterableColumns}
          setQueryParams={setQueryParams}
          table={table}
        />
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => router.push(`/provider`)}
          >
            View Provider
          </Button>
          <Button
            variant="default"
            onClick={() => router.push(`${path}/add`)}
          >
            <CirclePlus className="mr-2" />
            <span>Add {path.slice(1, path.length)}</span>
          </Button>
        </div>
      </div>
      <div className="rounded-md">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef
                            .header,
                          header.getContext()
                        )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={
                    row.getIsSelected() && "selected"
                  }
                >
                  {row.getVisibleCells().map((cell) => (
                    <React.Fragment key={cell.id}>
                      {isPending ? (
                        <TableCell>
                          <Skeleton className="w-full h-10 bg-neutral-300" />
                        </TableCell>
                      ) : (
                        <TableCell>
                          {flexRender(
                            cell.column.columnDef
                              .cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      )}
                    </React.Fragment>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination
        table={table}
        setQueryParams={setQueryParams}
      />
    </div>
  );
}
