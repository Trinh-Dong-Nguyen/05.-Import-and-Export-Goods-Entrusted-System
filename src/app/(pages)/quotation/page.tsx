"use client";

import { DataTable } from "@/app/(pages)/quotation/components/data-table";
import { CirclePlus, Search } from "lucide-react";
import { columns, IQuotation } from "./components/columns";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useReactTable } from "@tanstack/react-table";
import { DataTableFilter } from "./components/data-table-filter";
import { quotationData } from "./data/quotation-data";

export default function QuotationManagementPage() {
  const [currentFilter, setCurrentFilter] = useState<string | null>(null);

  return (
    <div className="flex flex-col p-[28px] w-full h-[calc(100vh-60px)] flex-grow">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Quotation</span>
        </div>
        <DataTable columns={columns} data={quotationData} />
      </div>
    </div>
  );
}
