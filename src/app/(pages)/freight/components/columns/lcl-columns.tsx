"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import ProviderCell from "./provider-cell";
import ActionCell from "./action-cell";
export const lclColumns: ColumnDef<Freight & LCL>[] = [
  {
    accessorKey: "providerId",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Provider
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => <ProviderCell providerId={row.getValue("providerId")} />,
  },
  {
    accessorKey: "origin",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Origin
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("origin"),
  },
  {
    accessorKey: "destination",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Destination
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("destination"),
  },
  {
    accessorKey: "transitTime",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Transit Time
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("transitTime"),
  },
  {
    accessorKey: "validFrom",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Valid From
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) =>
      new Date(row.getValue("validFrom")).toLocaleDateString("en-GB"),
  },
  {
    accessorKey: "validUntil",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Valid Until
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) =>
      new Date(row.getValue("validUntil")).toLocaleDateString("en-GB"),
  },
  {
    accessorKey: "additionFee",
    header: () => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
        >
          <p className="text-ellipsis overflow-hidden w-[100px]">
            Addition Fee
          </p>
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("additionFee"),
  },
  {
    accessorKey: "addition_fee_breakdown",
    header: () => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
        >
          <p className="text-ellipsis overflow-hidden w-[100px]">
            Addition Fee Breakdown
          </p>
        </Button>
      );
    },
    cell: ({ row }) =>
      row.getValue("addition_fee_breakdown")
        ? row.getValue("addition_fee_breakdown")
        : "N/A",
  },
  {
    accessorKey: "schedule",
    header: () => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
        >
          Schedule
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("schedule"),
  },
  {
    accessorKey: "cost",
    header: ({ column }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          style={{ backgroundColor: "transparent" }}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Cost
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("cost"),
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <ActionCell freightId={row.original.id} extraId={row.original.lcl_id} />
    ),
  },
];