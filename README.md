# Simple Donuts

A Small Library for creating donut charts.


## Very small
The Library has a minified Size of 6.62 KiB.


## Simple Usage

```js
const { Donut } = winodw.SimpleDonuts

const plainData = [{
        color: '#191970',
        value: 0.334,
    }, {
        color: '#dacd65',
        value: 0.333,
    }, {
        color: '#8ffe09',
        value: 0.333,
    }]

const donut = new Donut({ entries: plainData })
const svgElement = donut.getSVGElement()

document.getElmentById('parent_element').appendChild(svgElement)
```

![Chart Example](./example/example.svg)
