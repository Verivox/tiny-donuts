import { Segment } from './Segment'

export interface IEmptyRingParameter {
    radius: number
    strokeWidth: number
    center: {
        x: number,
        y: number,
    }
}

export class EmptyRing extends Segment {
    constructor() {
        super({
            color: '#d2d3d4',
            label: '',
            value: 1,
        })
    }

    public getSegment({ radius, center, strokeWidth }: IEmptyRingParameter) {
        const ns = 'http://www.w3.org/2000/svg'
        const circle = document.createElementNS(ns, 'circle')
        circle.setAttributeNS('', 'r', radius.toString())
        circle.setAttributeNS('', 'fill', this.fill)
        circle.setAttributeNS('', 'cx', `${center.x / 2}`)
        circle.setAttributeNS('', 'cy', `${center.y / 2}`)
        circle.setAttributeNS('', 'stroke', this.color)
        circle.setAttributeNS('', 'stroke-width', strokeWidth.toString())
        return circle
    }
}
