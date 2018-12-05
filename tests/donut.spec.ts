import * as assert from 'assert'
import { readFileSync } from 'fs'
import { join } from 'path'

import { JSDOM } from 'jsdom'

import { Donut } from '../src/Donut'

describe('Donut', () => {
    let dom: JSDOM
    beforeEach(() => {
        dom = new JSDOM()
    })

    it('can be created', () => {
        const fixture = readFileSync(join(__dirname, 'fixtures', 'fixture_donut_1.svg')).toString()
        const donut = new Donut({
            _document: dom.window.document,
            entries: [
                {
                    color: 'red',
                    value: 0.25,
                },
                {
                    color: 'blue',
                    value: 0.25,
                },
                {
                    color: 'black',
                    value: 0.25,
                },
                {
                    color: 'green',
                    value: 0.1,
                },
                {
                    color: 'orange',
                    value: 0.15,
                },
            ],
            spacing: 0.005,
            thickness: 12,
        })
        assert.strictEqual(fixture, donut.getSVGElement().outerHTML)
    })

    it('can\'t have the sum of entries greater than 1', () => {
        const options = {
            _document: dom.window.document,
            entries: [
                {
                    color: 'red',
                    value: 0.25,
                },
                {
                    color: 'blue',
                    value: 0.25,
                },
                {
                    color: 'black',
                    value: 1,
                },
            ],
            spacing: 0.005,
            thickness: 12,
        }
        assert.throws(() => new Donut(options))
    })
})
