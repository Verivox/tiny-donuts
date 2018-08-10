import { DonutSegment } from './DonutSegment';
export interface IBackgroundParameter {
    radius: number;
    center: {
        x: number;
        y: number;
    };
}
export declare class DonutBackground extends DonutSegment {
    constructor();
    getSegment({ radius, center }: IBackgroundParameter): SVGCircleElement;
}
