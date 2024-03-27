"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { fetchCubeByProductId } from "@/lib/stats-canada/fetcher";
import { useState } from "react";
import useSWR from "swr";

export default function CubeModal() {
  const [productId, setProductId] = useState(null);

  const { data, isLoading: isCubeFetching } = useSWR(
    productId ? `${productId}` : null,
    (key) => fetchCubeByProductId(key),
    { revalidateOnFocus: false }
  );
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add table</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Onboard new data</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col py-4 gap-4">{/* <Form></Form> */}</div>
      </DialogContent>
    </Dialog>
  );
}
