"use client";

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
      <p className="text-gray">길을 잃으신 것 같군요!</p>

      <p className="text-sm mt-12">
        {count}초 후, 메인 페이지로 이동합니다.
      </p>
    </div>
  );
}
