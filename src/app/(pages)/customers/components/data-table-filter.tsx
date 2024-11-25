'use client';

import { Table } from "@tanstack/react-table";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from '@/components/ui/select';
import { Search } from 'lucide-react';

interface DataTableToolbarProps<TData> {
  setQueryParams: React.Dispatch<SetStateAction<CustomerQueryParams>>;
  filterableColumns: string[];
  table: Table<TData>;
}

export function DataTableFilter<TData>({
  setQueryParams,
  filterableColumns,
}: DataTableToolbarProps<TData>) {
  const [currentFilter, setCurrentFilter] = useState<string>(
    filterableColumns[0]
  );
  const handleAssignFilter = (value: string) => {
    setTimeout(() => {
      setQueryParams((prev) => ({
        ...prev,
        [currentFilter]: value,
      }));
    }, 300);
  };

  return (
    <div className="flex gap-[5px] items-center">
      <div className="w-[300px] ">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search"
            onChange={(event) => handleAssignFilter(event.target.value)}
            className="pl-8 h-2.25"
          />
        </div>
      </div>
      <Select
        value={currentFilter}
        onValueChange={(value) => setCurrentFilter(value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {columnsTitle.map((title) => (
              <SelectItem value={title} key={title}>
                {title
                  .split('_')
                  .join(' ')
                  .toLowerCase()
                  .replace(/\b\w/g, (char) => char.toUpperCase())}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
