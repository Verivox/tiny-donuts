# Simple Donuts

A Small Library for creating donut charts.


## Simple Usage

 *** Labels are currently ignored ***

```js
const { Donut } = winodw.SimpleDonuts

const plainData = [{
        color: '#191970',
        value: 0.334,
        label: 'first',
    }, {
        color: '#dacd65',
        value: 0.333,
        label: 'second',
    }, {
        color: '#8ffe09',
        value: 0.333,
        label: 'third',
    }]

const donut = new Donut(plainData)
const svgElement = donut.get()

document.getElmentById('parent_element').appendChild(svgElement)
```

![Chart Example](/example/example.svg)
