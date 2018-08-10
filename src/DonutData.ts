import { DonutBackground } from './DonutBackground'
import { DonutEmptyRing } from './DonutEmptyRing'
import { DonutSegment, IDonutSegmentParameter } from './DonutSegment'

export interface IDataCircleParameter {
    strokeWidth: number
    center: {
        x: number,
        y: number,
    }
}

export class DonutData {
    private entries: DonutSegment[] = [
        new DonutBackground(),
        new DonutEmptyRing(),
    ]

    constructor(plainData: IDonutSegmentParameter[]) {
        this.add(plainData.map(plain => new DonutSegment(plain)))
    }

    /**
     * Add Entry to DonutData
     *
     * @param {(DonutSegment | DonutSegment[])} entry
     * @memberof DonutData
     */
    public add(entry: DonutSegment | DonutSegment[]) {
        const extended = this.entries.concat(entry)
        this.checkValues(extended)
        this.entries = extended
    }

    public getCircles({ strokeWidth, center }: IDataCircleParameter) {
        let filled = 0
        const segments: SVGCircleElement[] = []
        for (const entry of this.entries) {
            segments.push(entry.getSegment({
                center,
                previousLength: filled,
                radius: 100 / (Math.PI * 2),
                strokeWidth,
            }))
            filled += entry.value
        }
        return segments
    }

    private checkValues(list: DonutSegment[]) {
        const result = list.filter(itm => !itm.color).map(itm => itm.value).reduce((prev, curr) => prev + curr)
        if (result > 1) {
            throw Error('The extend entries would be higher than 1.')
        }
    }
}
