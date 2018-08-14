import { Segment } from './Segment'

export interface IBackgroundParameter {
    radius: number
    center: {
        x: number,
        y: number,
    }
}

export class Background extends Segment {
    constructor() {
        super({
            color: '',
            label: '',
            value: 0,
        })
    }

    public getSegment({ radius, center }: IBackgroundParameter) {
        const ns = 'http://www.w3.org/2000/svg'
        const circle = document.createElementNS(ns, 'circle')
        circle.setAttributeNS('', 'r', radius.toString())
        circle.setAttributeNS('', 'fill', this.fill)
        circle.setAttributeNS('', 'cx', `${center.x / 2}`)
        circle.setAttributeNS('', 'cy', `${center.y / 2}`)
        return circle
    }
}
