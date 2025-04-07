// components/WebVitalsReporter.tsx
'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    console.log(metric);
  });
  
  return null; // Este componente no renderiza nada
}