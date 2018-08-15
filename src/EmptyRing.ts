import { Segment } from './Segment'

export interface IEmptyRingParameter {
    radius: number
    thickness: number
    size: number
}

export class EmptyRing extends Segment {
    constructor() {
        super({
            color: '#d2d3d4',
            value: 1,
        })
    }

    public getSegment({ radius, size, thickness }: IEmptyRingParameter) {
        const ns = 'http://www.w3.org/2000/svg'
        const circle = document.createElementNS(ns, 'circle')
        circle.setAttributeNS('', 'r', radius.toString())
        circle.setAttributeNS('', 'fill', this.backgroundColor)
        circle.setAttributeNS('', 'cx', `${size / 2}`)
        circle.setAttributeNS('', 'cy', `${size / 2}`)
        circle.setAttributeNS('', 'stroke', this.color)
        circle.setAttributeNS('', 'stroke-width', thickness.toString())
        return circle
    }
}
