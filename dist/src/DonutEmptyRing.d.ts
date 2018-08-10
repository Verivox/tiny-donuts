import { DonutSegment } from './DonutSegment';
export interface IEmptyRingParameter {
    radius: number;
    strokeWidth: number;
    center: {
        x: number;
        y: number;
    };
}
export declare class DonutEmptyRing extends DonutSegment {
    constructor();
    getSegment({ radius, center, strokeWidth }: IEmptyRingParameter): SVGCircleElement;
}
