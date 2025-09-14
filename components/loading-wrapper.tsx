'use client';

import React, { useEffect, useState } from 'react';

interface LoadingWrapperProps {
  children: React.ReactNode;
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set loaded to true after component mounts
    setLoaded(true);
  }, []);

  return (
    <div
      className={`page-wrapper transition-opacity duration-700 ${
        loaded ? 'page-loaded opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
}
