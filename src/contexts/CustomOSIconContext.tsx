'use client';

import React, { createContext, useContext } from 'react';

export interface CustomOSIconConfig {
  macOSAppleIcon?: React.ReactNode;
  windowsStartIcon?: React.ReactNode;
}

const CustomOSIconContext = createContext<CustomOSIconConfig>({});

export function CustomOSIconProvider({
  config,
  children,
}: {
  config: CustomOSIconConfig;
  children: React.ReactNode;
}) {
  return (
    <CustomOSIconContext.Provider value={config}>
      {children}
    </CustomOSIconContext.Provider>
  );
}

export function useCustomOSIcon() {
  return useContext(CustomOSIconContext);
}
