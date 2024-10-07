"use client";
import { useEffect, useState } from "react";

export const Ring = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    import("ldrs").then(({ ring }) => {
        ring.register();
      setIsClient(true);
    });
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <l-ring size="60" speed="2.5" color="#8d3ccf"></l-ring>
    </>
  );
};
