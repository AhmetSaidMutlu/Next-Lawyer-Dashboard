"use client"

import React, { useState, Suspense } from 'react';

// Asenkron olarak yüklenen bileşeni tanımlayın
const LazyNovelEditor = React.lazy(() => import('novel').then(module => ({ default: module.Editor })));

function Editor() {
  const [saveStatus, setSaveStatus] = useState("Kaydedildi");

  return (
    <div className="relative w-full max-w-screen-lg">
      <div className="absolute right-5 top-5 z-10 mb-5 rounded-lg bg-stone-100 px-2 py-1 text-sm text-stone-200">
        {saveStatus}
      </div>
      <Suspense fallback={<div>Yükleniyor...</div>}>
        {/* Asenkron olarak yüklenen bileşeni kullanın */}
        <LazyNovelEditor
          onUpdate={() => {
            setSaveStatus("Kaydedilmedi");
          }}
          onDebouncedUpdate={() => {
            setSaveStatus("Kaydediliyor");
            // Simulate a delay in saving.
            setTimeout(() => {
              setSaveStatus("Kaydedildi");
            }, 500);
          }}
        />
      </Suspense>
    </div>
  );
}

export default Editor;
