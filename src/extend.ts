import { Donut } from './Donut'
import { DonutData } from './DonutData'
import { DonutSegment } from './DonutSegment'

if (window) {
    (window as any).SimpleDonuts = {
        Donut,
        DonutData,
        DonutSegment,
    }
}
