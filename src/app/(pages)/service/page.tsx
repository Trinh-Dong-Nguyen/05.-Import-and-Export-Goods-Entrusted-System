"use client";

import { DataTable } from "@/app/(pages)/service/components/data-table";
import { columns } from "./components/columns";
import { serviceData } from "./data/service-data";

export default function ServiceManagement() {
  return (
    <div className="flex flex-col p-[24px] w-full">
      <div className="flex flex-col w-full gap-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Service Management</span>
        </div>
        <DataTable columns={columns} data={serviceData} />
      </div>
    </div>
  );
}
