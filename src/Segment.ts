export interface IDonutSegmentParameter {
    color: string
    value: number
    backgroundColor?: string
}

export interface ISegmentParameter {
    radius: number
    circumference: number
    thickness: number
    offsetInPercent: number
    size: number
}

export class Segment {
    public color: string
    public value: number
    public backgroundColor: string

    constructor({ color, value, backgroundColor = 'transparent' }: IDonutSegmentParameter) {
        if (value > 1 || value < 0) {
            throw Error('Please choose a value between 0 and 1')
        }

        this.color = color
        this.value = value
        this.backgroundColor = backgroundColor
    }

    public getSegment({ radius, thickness, size, offsetInPercent, circumference }: ISegmentParameter) {
        const segmentSpace = 3
        const base = circumference / 100
        const offset = circumference - (base * (offsetInPercent * 100)) + (circumference / 4)
        const lengthOnCircle = base * (this.value * 100)
        const ns = 'http://www.w3.org/2000/svg'
        const circle = document.createElementNS(ns, 'circle')
        circle.setAttributeNS('', 'r', radius.toString())
        circle.setAttributeNS('', 'fill', this.backgroundColor)
        circle.setAttributeNS('', 'cx', `${size / 2}`)
        circle.setAttributeNS('', 'cy', `${size / 2}`)
        if (this.backgroundColor === 'transparent') {
            circle.setAttributeNS('', 'stroke', this.color)
            circle.setAttributeNS('', 'stroke-width', thickness.toString())
            circle.setAttributeNS('', 'stroke-dashoffset', offset.toString())
            circle.setAttributeNS('', 'stroke-dasharray', `${lengthOnCircle} ${(circumference - lengthOnCircle)}`)
        }
        return circle
    }
}
