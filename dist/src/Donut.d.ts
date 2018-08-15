import { DonutData } from './DonutData';
import { IDonutSegmentParameter } from './Segment';
export interface IDonutOptions {
    entries: DonutData | IDonutSegmentParameter[];
    segmentSpace?: number;
    width?: string;
    height?: string;
    thickness?: number;
}
export declare class Donut {
    private data;
    private svg;
    private thickness;
    private segmentSpace;
    private size;
    constructor({ entries, width, height, thickness, segmentSpace, }: IDonutOptions);
    get(): SVGSVGElement;
    private attachSegments;
}
