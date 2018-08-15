export interface IDonutSegmentParameter {
    color: string;
    value: number;
    backgroundColor?: string;
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
    value: number;
    backgroundColor: string;
    constructor({ color, value, backgroundColor }: IDonutSegmentParameter);
    getSegment({ radius, thickness, size, offsetInPercent, circumference }: ISegmentParameter): SVGCircleElement;
}
