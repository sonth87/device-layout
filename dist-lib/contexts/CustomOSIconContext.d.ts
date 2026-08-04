import { default as React } from 'react';
export interface CustomOSIconConfig {
    macOSAppleIcon?: React.ReactNode;
    windowsStartIcon?: React.ReactNode;
}
export declare function CustomOSIconProvider({ config, children, }: {
    config: CustomOSIconConfig;
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useCustomOSIcon(): CustomOSIconConfig;
