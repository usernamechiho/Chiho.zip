"use client";

import { useState } from "react";

export default function Carry() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <button onClick={() => setCount(count - 1)}>Click</button>

      <p>{count}</p>
    </div>
  );
}
