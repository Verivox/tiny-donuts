import { Segment } from './Segment';
export interface IEmptyRingParameter {
    radius: number;
    thickness: number;
    size: number;
}
export declare class EmptyRing extends Segment {
    constructor();
    getSegment({ radius, size, thickness }: IEmptyRingParameter): SVGCircleElement;
}
