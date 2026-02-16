"use client";

import { useEffect, useState } from "react";

export default function CSRPage() {
  const [time, setTime] = useState("");

  useEffect(() => {
    fetch("/api/time")
      .then(res => res.json())
      .then(data => setTime(data.time));
  }, []);

  return (
    <div>
      <h1>CSR Page</h1>
      <p>{time}</p>
    </div>
  );
}
