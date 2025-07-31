'use client'
import { useEffect } from 'react'

export default function SchemaInjector({ structuredData }) {
  useEffect(() => {
    if (!structuredData) return;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'payload-schema';
    script.textContent = JSON.stringify(structuredData);

    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('payload-schema');
      if (existing) existing.remove();
    };
  }, [structuredData]);

  return null;
}

