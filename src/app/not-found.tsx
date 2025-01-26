"use client";

import AnimatedPageHeader from "@/_components/AnimatedPageHeader";
import { redirect } from "next/navigation";

import { useEffect, useState } from "react";

export default function NotFound() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (count === 0) {
    redirect("/");
  }

  return (
    <div>
      <AnimatedPageHeader label="404" />

      <p className="text-gray">
        길을 잃으신 것 같군요! {count}초 후, 메인 페이지로 이동합니다.
      </p>
    </div>
  );
}
