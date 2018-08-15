import { expect } from 'chai';

interface IFoo {
    value: number,
    color?: string
}

interface IDiagramOptions {
    segments: IFoo[],
    spacing: number
}

function correctSegmentsForSpacing({ segments, spacing }: IDiagramOptions) {
    const totalLengthWithoutSpacing = 1 - spacing * segments.length

    const result = segments.map(entry => ({ ...entry,value: entry.value * totalLengthWithoutSpacing }))
                           .map(entry => ({ ...entry,value: parseFloat(entry.value.toFixed(4))}) )
    return result
}


interface ISegmentOptions {
    start: number,
    length: number,
    color: string
}

interface ISegment {
    constructor(ISegmentOptions)
    draw()
}

interface IDiagram {
    constructor(IDiagramOptions)
    getSVGElement()
}




describe('Segments', () => {
    it('One segment in, no spacing, returns equal lengths', () => {
        const input = {
            spacing: 0,
            segments: [ {
                value: 1
            }]
        }

        const expected = input.segments
        expect(correctSegmentsForSpacing(input)).to.deep.equal(expected)
    })

    it('Two segments in, no spacing, returns equal lenghts', () => {
        const input = {
            spacing: 0,
            segments: [{
                value: 0.7
            }, {
                value: 0.3
            }]
        }

        const expected = input.segments
        expect(correctSegmentsForSpacing(input)).to.deep.equal(expected)
    })

    it('does not delete color data', () => {
        const input = {
            spacing: 0,
            segments: [{
                color: 'red',
                value: 0.7
            }, {
                color: 'purbleelephantwithgiraffeyellowandinvisibleuv',
                value: 0.3
            }]
        }

        const expected = input.segments
        expect(correctSegmentsForSpacing(input)).to.deep.equal(expected)
    })

    it('One segment, spacing of 10%', () => {
        const input = {
            spacing: 0.1,
            segments: [{value: 1}]
        }

        const expected = [{value: 0.9}]
        expect(correctSegmentsForSpacing(input)).to.deep.equal(expected)
    })


    it('Two segments of unequal size, spacing of 10%', () => {
        const input = {
            spacing: 0.1,
            segments: [{value: 0.9}, {value:0.1}]
        }

        const actual = correctSegmentsForSpacing(input)
        const segmentsLength = actual.map(entry => entry.value)
                                     .reduce((prev, cur) => prev + cur)
        const expected = [{value: 0.72}, {value: 0.08}]
        expect(correctSegmentsForSpacing(input)).to.deep.equal(expected)
        expect(segmentsLength + input.spacing * actual.length).to.be.approximately(1, 0.00001)
    })
})

