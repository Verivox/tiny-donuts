import { DonutData } from './DonutData';
import { IDonutSegmentParameter } from './Segment';
export interface IDonutOptions {
    entries: DonutData | IDonutSegmentParameter[];
    width?: string;
    height?: string;
    strokeWidth?: number;
    center?: {
        x: number;
        y: number;
    };
}
export declare class Donut {
    private data;
    private svg;
    private strokeWidth;
    private center;
    constructor({ entries, width, height, strokeWidth, center, }: IDonutOptions);
    get(): SVGSVGElement;
    private attachSegments;
}
