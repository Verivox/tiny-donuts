import { Segment } from './Segment';
export interface IBackgroundParameter {
    radius: number;
    size: number;
}
export declare class Background extends Segment {
    constructor();
    getSegment({ radius, size }: IBackgroundParameter): SVGCircleElement;
}
