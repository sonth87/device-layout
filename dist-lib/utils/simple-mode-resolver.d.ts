import { OSTheme } from '../types/theme';
import { SimpleModeProp, NormalizedSimpleModeFeatures } from '../types/simple-mode';
/**
 * Resolves a `SimpleModeProp` (`boolean | SimpleModeFeatures`) and `osTheme` into a fully normalized,
 * predictable feature flag object for internal rendering.
 */
export declare function resolveSimpleModeFeatures(isSimpleMode?: SimpleModeProp, osTheme?: OSTheme): NormalizedSimpleModeFeatures;
