import { default as React } from 'react';
import { NormalizedSimpleModeFeatures } from '../types/simple-mode';
export declare function SimpleModeProvider({ features, children, }: {
    features: NormalizedSimpleModeFeatures;
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useSimpleModeFeatures(): NormalizedSimpleModeFeatures;
