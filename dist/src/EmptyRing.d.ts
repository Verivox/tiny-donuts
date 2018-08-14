import { Segment } from './Segment';
export interface IEmptyRingParameter {
    radius: number;
    strokeWidth: number;
    center: {
        x: number;
        y: number;
    };
}
export declare class EmptyRing extends Segment {
    constructor();
    getSegment({ radius, center, strokeWidth }: IEmptyRingParameter): SVGCircleElement;
}
