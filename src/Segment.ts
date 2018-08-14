export interface IDonutSegmentParameter {
    color: string
    value: number
    label?: string
    fill?: string
}

export interface ISegmentParameter {
    radius: number
    strokeWidth: number
    previousLength: number
    center: {
        x: number,
        y: number,
    }
}

export class Segment {
    public color: string
    public value: number
    public label: string
    public fill: string

    constructor({ color, value, label = '', fill = 'transparent' }: IDonutSegmentParameter) {
        if (value > 1 || value < 0) {
            throw Error('Please choose a value between 0 and 1')
        }

        this.color = color
        this.value = value
        this.label = label
        this.fill = fill
    }

    public getSegment({ radius, strokeWidth, center, previousLength }: ISegmentParameter) {
        const offset = 100 - (previousLength * 100) + 25
        const ns = 'http://www.w3.org/2000/svg'
        const circle = document.createElementNS(ns, 'circle')
        circle.setAttributeNS('', 'r', radius.toString())
        circle.setAttributeNS('', 'fill', this.fill)
        circle.setAttributeNS('', 'cx', `${center.x / 2}`)
        circle.setAttributeNS('', 'cy', `${center.y / 2}`)
        if (this.fill === 'transparent') {
            circle.setAttributeNS('', 'stroke', this.color)
            circle.setAttributeNS('', 'stroke-width', strokeWidth.toString())
            circle.setAttributeNS('', 'stroke-dashoffset', offset.toString())
            circle.setAttributeNS('', 'stroke-dasharray', `${this.value * 100} ${(1 - this.value) * 100}`)
        }
        return circle
    }
}
