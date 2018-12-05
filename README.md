# Tiny Donuts

[![CircleCI branch](https://img.shields.io/circleci/project/github/Verivox/tiny-donuts/master.svg?style=flat-square)](https://circleci.com/gh/Verivox/tiny-donuts)
[![NpmLicense](https://img.shields.io/npm/l/@verivox/tiny-donuts.svg?style=flat-square)](https://www.npmjs.com/package/@verivox/tiny-donuts)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@verivox/tiny-donuts.svg?style=flat-square)](https://www.npmjs.com/package/@verivox/tiny-donuts)
[![npm (scoped)](https://img.shields.io/npm/v/@verivox/tiny-donuts.svg?style=flat-square)](https://www.npmjs.com/package/@verivox/tiny-donuts)

A tiny, dependency-less library for creating SVG donut charts.


## Why

We needed Donut charts - however, Chart.js was a much too powerful (and big) for our use case and added >200kb to our browser application.

So we wrote this small library with a minified size of 4 KiB.


## Usage

Install the package as a dependency: `npm install @verivox/tiny-donuts`

```js
const { Donut } = window.TinyDonuts

const donut = new Donut({ 
       entries: [
           { color: 'red',     value: 0.25},
           { color: 'blue',    value: 0.25},
           { color: 'black',   value: 0.25},
           { color: 'green',   value: 0.1},
           { color: '#FFA500', value: 0.15}
       ]
   })
   
const svgElement = donut.getSVGElement()
document.getElmentById('parent_element').appendChild(svgElement)
```

![Chart Example](./example/example.png)


## Configuration options

* `entries` - a list of segments, consisting of a css `color` and a float `value`
* `thickness` - the stroke width of the circle
* `spacing` - how much whitespace should be between each segment


## Development

We use typescript, which is transpiled to javascript.

Make sure that you create tests if necessary, which can be run via `npm test`.

What you should check before creating a merge request:

* [ ] `npm test` is green
* [ ] `npm run lint` is green
* [ ] `npm run build` has been run and the dist/-folder has been checked into the branch to be merged
* [ ] the documentation has been updated for feature changes



## Authors

Written by [Kim Almasan](https://kumbier.it), [Lars Kumbier](https://kumbier.it) helped a tiny bit.


## Licence

[Licensed](./LICENSE.md) under MIT by the Verivox GmbH
