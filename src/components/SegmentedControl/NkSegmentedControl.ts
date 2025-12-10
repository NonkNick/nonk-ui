export interface NkSegmentedControlOption {
    value: string | number;
    label: string;
}

export interface NkSegmentedControlProps {
    modelValue: string | number;
    options: NkSegmentedControlOption[];
}

export interface NkSegmentedControlEmits {
    (e: 'update:modelValue', value: string | number): void;
}