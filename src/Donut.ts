import { DonutData } from './DonutData'
import { IDonutSegmentParameter } from './Segment'

export interface IDonutOptions {
    entries: DonutData | IDonutSegmentParameter[]
    segmentSpace?: number
    width?: string
    height?: string
    thickness?: number
}

export class Donut {
    private data: DonutData
    private svg: SVGSVGElement
    private thickness: number
    private segmentSpace: number
    private size = 100

    constructor({
        entries,
        width = '100%',
        height = '100%',
        thickness = 3,
        segmentSpace = 3,
    }: IDonutOptions) {
        const ns = 'http://www.w3.org/2000/svg'
        if (!(entries instanceof DonutData)) {
            entries = new DonutData(entries)
        }

        this.data = entries
        this.svg = document.createElementNS(ns, 'svg')
        this.svg.style.height = height
        this.svg.style.width = width
        this.svg.setAttributeNS('', 'viewBox', `0 0 ${this.size} ${this.size}`)
        this.thickness = thickness
        this.segmentSpace = segmentSpace
        this.attachSegments()
    }

    public get() {
        return this.svg
    }

    private attachSegments() {
        const segments = this.data.getCircles({
            segmentSpace: this.segmentSpace,
            size: this.size,
            thickness: this.thickness,
        })

        for (const segment of segments) {
            this.svg.appendChild(segment)
        }
    }
}
