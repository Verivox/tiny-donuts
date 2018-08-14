export interface IDonutSegmentParameter {
    color: string
    value: number
    label?: string
    fill?: string
}

export interface ISegmentParameter {
    radius: number
    circumference: number
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

    public getSegment({ radius, strokeWidth, center, previousLength, circumference }: ISegmentParameter) {
        const base = circumference / 100
        const offset = circumference - (base * (previousLength * 100)) + (circumference / 4)
        const percentage = base * (this.value * 100)
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
            circle.setAttributeNS('', 'stroke-dasharray', `${percentage} ${(circumference - percentage)}`)
        }
        return circle
    }
}
