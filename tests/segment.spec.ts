/* tslint:disable:no-unused-expression */
import * as assert from 'assert'
import { readFileSync } from 'fs'
import { join } from 'path'

import { JSDOM } from 'jsdom'

import { Segment } from '../src/Segment'

describe('Segments', () => {
    let dom: JSDOM
    beforeEach(() => {
        dom = new JSDOM()
    })

    it('can\'t have length above 1', () => {
        const options = {
            _document: dom.window.document,
            color: 'red',
            length: 1.1,
            start: 0,
            thickness: 1,
            size: 100,
        }

        assert.throws(() => new Segment(options))
    })

    it('can\'t have length equal to 0', () => {
        const options = {
            _document: dom.window.document,
            color: 'red',
            length: 0,
            start: 0,
            thickness: 1,
            size: 100,
        }

        assert.throws(() => new Segment(options))
    })

    it('can\'t have length below 0', () => {
        const options = {
            _document: dom.window.document,
            color: 'red',
            length: -1,
            start: 0,
            thickness: 1,
            size: 100,
        }

        assert.throws(() => new Segment(options))
    })

    it('can have length between 0 and 1', () => {
        const options = {
            _document: dom.window.document,
            color: 'red',
            length: 0.5,
            start: 0,
            thickness: 1,
            size: 100,
        }

        assert.doesNotThrow(() => new Segment(options))
    })

    it('creates a valid circle segement', () => {
        const fixture = readFileSync(join(__dirname, 'fixtures', 'fixture_segment.svg')).toString()
        const options = {
            _document: dom.window.document,
            color: 'red',
            length: 0.5,
            start: 0,
            thickness: 1,
            size: 100,
        }
        const segment = new Segment(options)
        assert.strictEqual(fixture, segment.getSVGElement().outerHTML)
    })

})
