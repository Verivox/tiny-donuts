import { Segment } from './Segment'

export interface IDonutOptions {
    entries: IValue[]
    spacing?: number
    thickness?: number | 'pie'
}

export interface IValue {
    color: string
    value: number
}

export class Donut {
    private entries: IValue[]
    private thickness: number
    private spacing: number
    private size = 100

    constructor({
        entries,
        thickness = 3,
        spacing = 0.005,
    }: IDonutOptions) {

        this.spacing = thickness === 'pie' ? 0 : spacing
        this.entries = entries
        this.thickness = thickness === 'pie' ? this.size / 2 : thickness
    }

    public getSVGElement() {
        const segments = this.constructSegments()
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        svg.setAttributeNS('', 'viewBox', `0 0 ${this.size} ${this.size}`)

        segments.forEach(segment => svg.appendChild(segment.getSVGElement()))
        return svg
    }

    private constructSegments() {
        const segmentsWithSpacing = this.correctSegmentsForSpacing({ segments: this.entries, spacing: this.spacing })
        let start = 0
        const segments = []
        for (const entry of segmentsWithSpacing) {
            segments.push(new Segment({
                color: entry.color,
                length: entry.value,
                size: this.size,
                start,
                thickness: this.thickness,
            }))

            start += entry.value + this.spacing
        }
        return segments
    }

    private correctSegmentsForSpacing({ segments, spacing }: { segments: IValue[], spacing: number }) {
        const totalLengthWithoutSpacing = 1 - spacing * segments.length
        const result = segments.map(entry => ({ ...entry, value: entry.value * totalLengthWithoutSpacing }))
            .map(entry => ({ ...entry, value: parseFloat(entry.value.toFixed(4)) }))
        return result
    }
}
