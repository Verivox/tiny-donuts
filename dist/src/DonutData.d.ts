import { IDonutSegmentParameter, Segment } from './Segment';
export interface IDataCircleParameter {
    thickness: number;
    size: number;
    segmentSpace: number;
}
export declare class DonutData {
    private entries;
    constructor(plainData: IDonutSegmentParameter[]);
    add(entry: Segment | Segment[]): void;
    getCircles({ thickness, size, segmentSpace }: IDataCircleParameter): SVGCircleElement[];
    private checkValues;
}
