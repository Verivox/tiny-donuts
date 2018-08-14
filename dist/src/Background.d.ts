import { Segment } from './Segment';
export interface IBackgroundParameter {
    radius: number;
    center: {
        x: number;
        y: number;
    };
}
export declare class Background extends Segment {
    constructor();
    getSegment({ radius, center }: IBackgroundParameter): SVGCircleElement;
}
