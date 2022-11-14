import React from "react";
import { useRouter } from "next/router";

export default function Salon() {
  const router = useRouter();
  const { salon } = router.query;

  return <div>Salon: {salon}</div>;
}
