const { Donut, DonutData, DonutSegment } = window.SimpleDonuts
const parent = document.getElementById('donut_parent')

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

const donut = new Donut({ data: plainData })
parent.appendChild(donut.get())
