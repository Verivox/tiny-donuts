export interface IDonutOptions {
    entries: IValue[];
    spacing?: number;
    thickness?: number | 'pie';
    _document?: Document;
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
    private document;
    constructor({ entries, thickness, spacing, _document, }: IDonutOptions);
    getSVGElement(): SVGSVGElement;
    private constructSegments;
    private correctSegmentsForSpacing;
}
