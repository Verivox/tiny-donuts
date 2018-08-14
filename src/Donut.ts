import { DonutData } from './DonutData'
import { IDonutSegmentParameter } from './Segment'

export interface IDonutOptions {
    entries: DonutData | IDonutSegmentParameter[]
    width?: string
    height?: string
    strokeWidth?: number
    center?: {
        x: number,
        y: number,
    }
}

export class Donut {
    private data: DonutData
    private svg: SVGSVGElement
    private strokeWidth: number
    private center: {
        x: number,
        y: number,
    }

    constructor({
        entries,
        width = '100%',
        height = '100%',
        strokeWidth = 3,
        center = { x: 50, y: 50 },
    }: IDonutOptions) {
        const ns = 'http://www.w3.org/2000/svg'
        if (!(entries instanceof DonutData)) {
            entries = new DonutData(entries)
        }

        this.data = entries
        this.svg = document.createElementNS(ns, 'svg')
        this.svg.style.height = height
        this.svg.style.width = width
        this.center = center
        this.svg.setAttributeNS('', 'viewBox', `0 0 ${center.x} ${center.y}`)
        this.strokeWidth = strokeWidth
        this.attachSegments()
    }

    public get() {
        return this.svg
    }

    private attachSegments() {
        const segments = this.data.getCircles({
            center: this.center,
            strokeWidth: this.strokeWidth,
        })

        for (const segment of segments) {
            this.svg.appendChild(segment)
        }
    }
}
