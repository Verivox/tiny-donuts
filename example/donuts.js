const { Donut, DonutData, Segment } = window.SimpleDonuts
const parent = document.getElementById('donut_parent')

const plainData = [
    {
        color: 'red',
        value: 0.25,
        label: 'first',
    },
    {
        color: 'blue',
        value: 0.25,
        label: 'second',
    },
    {
        color: 'black',
        value: 0.25,
        label: 'third',
    },
    {
        color: 'green',
        value: 0.25,
        label: 'third',
    }
]

const donut = new Donut({ entries: plainData, strokeWidth: 3 })
parent.appendChild(donut.get())
