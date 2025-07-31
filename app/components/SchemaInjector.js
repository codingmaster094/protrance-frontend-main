"use client";
import { useEffect } from "react";

export default function SchemaInjector({ schemaJSON }) {
  useEffect(() => {
    if (!schemaJSON) return;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "payload-schema";
    script.textContent = schemaJSON;

    // Remove old script if it exists
    const oldScript = document.getElementById("payload-schema");
    if (oldScript) oldScript.remove();

    document.head.appendChild(script);
  }, [schemaJSON]);

  return null;
}
