import { Segment } from './Segment'

export interface IDonutOptions {
    entries: IValue[]
    spacing?: number
    thickness?: number | 'pie'
    _document?: Document
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
    private document: Document

    constructor({
        entries,
        thickness = 3,
        spacing = 0.005,
        _document = document,
    }: IDonutOptions) {

        if (entries.map(i => i.value).reduce((prev, curr) => prev + curr, 0) > 1) {
            throw new Error('The sum of entries can not be greater than 1')
        }

        this.document = _document
        this.spacing = thickness === 'pie' ? 0 : spacing
        this.entries = entries
        this.thickness = thickness === 'pie' ? this.size / 2 : thickness
    }

    public getSVGElement() {
        const segments = this.constructSegments()
        const svg = this.document.createElementNS('http://www.w3.org/2000/svg', 'svg')
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
                _document: this.document,
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
