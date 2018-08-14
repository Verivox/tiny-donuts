import { Donut } from './Donut'
import { DonutData } from './DonutData'
import { Segment } from './Segment'

if (window) {
    (window as any).SimpleDonuts = {
        Donut,
        DonutData,
        Segment,
    }
}
