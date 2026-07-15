import { CSSProperties } from 'react';
import { ThemeConfig } from '../types/theme';
type ThemeCssVars = CSSProperties & Record<`--${string}`, string>;
export declare function getThemeCssVars(config: ThemeConfig): ThemeCssVars;
export {};
