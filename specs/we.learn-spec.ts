import { expect } from 'chai';

function correctLengthForSpacing({totalLength, segmentLength, spacing}) {
    return 9
}

describe('Segmented Lengths', () => {
    it('has the correct size for one 100% segment', () => {
        const input = {
            totalLength: 100,
            segmentLength: 100,
            spacing: 5
        }
        expect(correctLengthForSpacing(input)).to.equal(95)
    })
})