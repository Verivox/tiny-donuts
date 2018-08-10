# Simple Donuts

A Small Library for creating donut charts.


## Simple Usage

 *** Label are currently ignored ***

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

<svg viewBox="0 0 50 50" style="height: 100%; width: 100%;">
    <circle r="15.915494309189533" fill="transparent" cx="25" cy="25"></circle>
    <circle r="15.915494309189533" fill="transparent" cx="25" cy="25" stroke="#d2d3d4" stroke-width="3"></circle>
    <circle r="15.915494309189533" fill="transparent" cx="25" cy="25" stroke="#191970" stroke-width="3" stroke-dashoffset="25"
        stroke-dasharray="33.4 66.6"></circle>
    <circle r="15.915494309189533" fill="transparent" cx="25" cy="25" stroke="#dacd65" stroke-width="3" stroke-dashoffset="-8.400000000000006"
        stroke-dasharray="33.300000000000004 66.7"></circle>
    <circle r="15.915494309189533" fill="transparent" cx="25" cy="25" stroke="#8ffe09" stroke-width="3" stroke-dashoffset="-41.70000000000002"
        stroke-dasharray="33.300000000000004 66.7"></circle>
</svg>