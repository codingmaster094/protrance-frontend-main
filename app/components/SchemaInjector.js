"use client";
import { useEffect } from "react";

export default function SchemaInjector({ schemaJSON }) {
  useEffect(() => {
    if (!schemaJSON) return;

    // Remove old script if it exists BEFORE adding the new one
    const oldScript = document.getElementById("payload-schema");
    if (oldScript) oldScript.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "payload-schema";
    script.textContent = JSON.stringify(schemaJSON);
    document.head.appendChild(script);

    // Optional: Cleanup on unmount
    return () => {
      const old = document.getElementById("payload-schema");
      if (old) old.remove();
    };
  }, [schemaJSON]);

  return null;
}
