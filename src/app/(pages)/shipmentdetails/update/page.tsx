"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"; // Nhập Select
import { useParams } from "next/navigation";

const formSchema = z.object({
  type: z.string(),
  number: z.string(),
  image: z.string(),
});

export default function UpdateDetail() {
  const { id: customerId } = useParams<{ id: string }>();
  const [preview, setPreview] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col items-center p-[24px] w-full">
      <div className="flex w-full justify-between items-end">
        <span className="text-3xl font-bold">Update Details</span>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <div className="flex flex-col items-center w-[600px] gap-4 py-4">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Document Type</FormLabel>
                  <FormControl>
                    <label className="block border border-gray-300 rounded-md p-2 cursor-pointer hover:bg-gray-100 transition">
                      {field.value && typeof field.value !== "string"
                        ? field.value
                        : "Select a document"}
                      <input
                        type="file"
                        className="hidden"
                        {...field}
                        onChange={(e) => {
                          const files = e.target.files; // Lấy files
                          if (files && files.length > 0) {
                            const file = files[0]; // Lấy file đầu tiên
                            field.onChange(file); // Cập nhật giá trị cho field
                          } else {
                            field.onChange(null); // Nếu không có file nào, có thể cập nhật giá trị thành null
                          }
                        }}
                      />
                    </label>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Document Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Type Document Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="image"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Image</FormLabel>
                  <FormControl>
                    <label className="block border border-gray-300 rounded-md p-2 cursor-pointer hover:bg-gray-100 transition">
                      {field.value && typeof field.value !== "string"
                        ? field.value
                        : "Select an image"}
                      <input
                        type="file"
                        className="hidden"
                        {...field}
                        onChange={(e) => {
                          const files = e.target.files; // Lấy files
                          if (files && files.length > 0) {
                            const file = files[0]; // Lấy file đầu tiên
                            field.onChange(file); // Cập nhật giá trị cho field
                          } else {
                            field.onChange(null); // Nếu không có file nào, có thể cập nhật giá trị thành null
                          }
                        }}
                      />
                    </label>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-1/2 flex gap-2.5">
              <Link
                href="/shipmentdetails"
                className="w-1/2 h-14 text-lg bg-white text-black"
              >
                <Button
                  className="w-full h-10 text-lg bg-white text-black"
                  type="button"
                >
                  Cancel
                </Button>
              </Link>
              <Button className="w-1/2 h-10 text-lg" type="submit">
                Save
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
