export interface IDonutSegmentParameter {
    color: string;
    length: number;
    size: number;
    start: number;
    thickness: number;
}
export interface ISegmentParameter {
    radius: number;
    circumference: number;
    thickness: number;
    offsetInPercent: number;
    size: number;
}
export declare class Segment {
    color: string;
    length: number;
    size: number;
    start: number;
    thickness: number;
    backgroundColor: string;
    constructor({ color, length, size, start, thickness }: IDonutSegmentParameter);
    getSVGElement(): SVGCircleElement;
}
