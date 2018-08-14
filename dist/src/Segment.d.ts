export interface IDonutSegmentParameter {
    color: string;
    value: number;
    label?: string;
    fill?: string;
}
export interface ISegmentParameter {
    radius: number;
    circumference: number;
    strokeWidth: number;
    previousLength: number;
    center: {
        x: number;
        y: number;
    };
}
export declare class Segment {
    color: string;
    value: number;
    label: string;
    fill: string;
    constructor({ color, value, label, fill }: IDonutSegmentParameter);
    getSegment({ radius, strokeWidth, center, previousLength, circumference }: ISegmentParameter): SVGCircleElement;
}
