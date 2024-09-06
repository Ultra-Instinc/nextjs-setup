"use client"
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Home() {
  const storeuser = useMutation(api.users.store)
  useEffect(() => {
    storeuser({})
  }, [])
  return (
    <main className="flex flex-col items-center justify-around bg-slate-950 h-full">
      Hello World
      <Button onClick={() => toast.success("It worked!")}>Click me</Button>
    </main>
  );
}

