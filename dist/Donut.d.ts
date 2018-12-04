export interface IDonutOptions {
    entries: IValue[];
    spacing?: number;
    thickness?: number | 'pie';
}
export interface IValue {
    color: string;
    value: number;
}
export declare class Donut {
    private entries;
    private thickness;
    private spacing;
    private size;
    constructor({ entries, thickness, spacing, }: IDonutOptions);
    getSVGElement(): SVGSVGElement;
    private constructSegments;
    private correctSegmentsForSpacing;
}
