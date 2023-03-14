"use client";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  return (
    <div>
      <button type="button" onClick={() => router.push("/list/1")}>
        Click This
      </button>
    </div>
  );
}

export default Page;
