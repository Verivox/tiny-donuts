import { DonutSegment, IDonutSegmentParameter } from './DonutSegment';
export interface IDataCircleParameter {
    strokeWidth: number;
    center: {
        x: number;
        y: number;
    };
}
export declare class DonutData {
    private entries;
    constructor(plainData: IDonutSegmentParameter[]);
    add(entry: DonutSegment | DonutSegment[]): void;
    getCircles({ strokeWidth, center }: IDataCircleParameter): SVGCircleElement[];
    private checkValues;
}
