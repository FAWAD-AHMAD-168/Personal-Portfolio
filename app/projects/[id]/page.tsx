"use client";

import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const id = params?.id;

  return (
    <div className="text-white bg-black min-h-screen flex items-center justify-center">
      <h1 className="text-2xl">
        DETAILING OF THE PROJECT WITH ID {id} IS GIVEN BELOW !!
      </h1>
    </div>
  );
}
