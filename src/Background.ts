import { Segment } from './Segment'

export interface IBackgroundParameter {
    radius: number
    size: number
}

export class Background extends Segment {
    constructor() {
        super({
            color: '',
            value: 0,
        })
    }

    public getSegment({ radius, size }: IBackgroundParameter) {
        const ns = 'http://www.w3.org/2000/svg'
        const circle = document.createElementNS(ns, 'circle')
        circle.setAttributeNS('', 'r', radius.toString())
        circle.setAttributeNS('', 'fill', this.backgroundColor)
        circle.setAttributeNS('', 'cx', `${size / 2}`)
        circle.setAttributeNS('', 'cy', `${size / 2}`)
        return circle
    }
}
