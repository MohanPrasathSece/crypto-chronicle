import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bitcoin Surges Above Key Resistance as Institutional Demand Accelerates — Monde Quotidien" },
      { name: "description", content: "Bitcoin breaks past a critical resistance level as spot ETF inflows, whale accumulation, and macro tailwinds drive renewed institutional demand." },
      { property: "og:title", content: "Bitcoin Surges Above Key Resistance as Institutional Demand Accelerates" },
      { property: "og:description", content: "Inside the rally: ETF flows, on-chain signals, regulation, and what analysts expect next." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/article.html");
  }, []);
  return null;
}
