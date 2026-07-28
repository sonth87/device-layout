import { WidgetSize } from '../../types/widget';
export interface WidgetComponentProps {
    size: WidgetSize;
}
interface Props {
    componentKey: string;
    size: WidgetSize;
}
export declare function WidgetRenderer({ componentKey, size }: Props): import("react/jsx-runtime").JSX.Element;
export {};
