export interface IDonutSegmentParameter {
    color: string
    length: number
    size: number
    start: number
    thickness: number
    _document?: Document
}

export class Segment {
    public color: string
    public length: number
    public size: number
    public start: number
    public thickness: number
    public backgroundColor = 'transparent'
    private document: Document

    constructor({ color, length, size, start, thickness, _document = document }: IDonutSegmentParameter) {
        if (length > 1 || length <= 0) {
            throw Error('Please choose a value between 0 and 1')
        }

        this.color = color
        this.length = length
        this.size = size
        this.thickness = thickness
        this.start = start
        this.document = _document
    }

    public getSVGElement() {
        const radius = (this.size / 2) - (this.thickness / 2)
        const circumference = radius * 2 * Math.PI
        const base = circumference / 100
        const offset = circumference - (base * (this.start * 100)) + (circumference / 4)
        const lengthOnCircle = base * (this.length * 100)

        const circle = this.document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        circle.setAttributeNS('', 'r', radius.toString())
        circle.setAttributeNS('', 'fill', this.backgroundColor)
        circle.setAttributeNS('', 'cx', `${this.size / 2}`)
        circle.setAttributeNS('', 'cy', `${this.size / 2}`)
        if (this.backgroundColor === 'transparent') {
            circle.setAttributeNS('', 'stroke', this.color)
            circle.setAttributeNS('', 'stroke-width', this.thickness.toString())
            circle.setAttributeNS('', 'stroke-dashoffset', offset.toString())
            circle.setAttributeNS('', 'stroke-dasharray', `${lengthOnCircle} ${(circumference - lengthOnCircle)}`)
        }
        return circle
    }
}
