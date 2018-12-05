export interface IDonutSegmentParameter {
    color: string;
    length: number;
    size: number;
    start: number;
    thickness: number;
    _document?: Document;
}
export declare class Segment {
    color: string;
    length: number;
    size: number;
    start: number;
    thickness: number;
    backgroundColor: string;
    private document;
    constructor({ color, length, size, start, thickness, _document }: IDonutSegmentParameter);
    getSVGElement(): SVGCircleElement;
}
