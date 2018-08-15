const { Donut, DonutData, Segment } = window.SimpleDonuts
const parent = document.getElementById('donut_parent')

const plainData = [
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
        value: 0.25,
    }
]

const donut = new Donut({ entries: plainData, thickness: 3 })
parent.appendChild(donut.get())
