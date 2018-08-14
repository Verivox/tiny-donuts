import { Background } from './Background'
import { EmptyRing } from './EmptyRing'
import { IDonutSegmentParameter, Segment } from './Segment'

export interface IDataCircleParameter {
    strokeWidth: number
    center: {
        x: number,
        y: number,
    }
}

export class DonutData {
    private entries: Segment[] = [
        new Background(),
        new EmptyRing(),
    ]

    constructor(plainData: IDonutSegmentParameter[]) {
        this.add(plainData.map(plain => new Segment(plain)))
    }

    /**
     * Add Entry to DonutData
     *
     * @param {(Segment | Segment[])} entry
     * @memberof DonutData
     */
    public add(entry: Segment | Segment[]) {
        const extended = this.entries.concat(entry)
        this.checkValues(extended)
        this.entries = extended
    }

    public getCircles({ strokeWidth, center }: IDataCircleParameter) {
        let filled = 0
        const radius = (center.x / 2) - (strokeWidth / 2)
        const circumference = 2 * Math.PI * radius
        const segments: SVGCircleElement[] = []
        for (const entry of this.entries) {
            segments.push(entry.getSegment({
                center,
                circumference,
                previousLength: filled,
                radius,
                strokeWidth,
            }))
            filled += entry.value
        }
        return segments
    }

    private checkValues(list: Segment[]) {
        const result = list.filter(itm => !itm.color).map(itm => itm.value).reduce((prev, curr) => prev + curr)
        if (result > 1) {
            throw Error('The extend entries would be higher than 1.')
        }
    }
}
