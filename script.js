const arr = [1, 2, 3, 4, 5]

const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25}
]

const filteredItems = items.filter((item) => {
    return item.price <= 200
})

console.log(filteredItems)

const mappedItems = items.map((item) => {
    return item.name
})
console.log(mappedItems)

const foundItems = items.find((item) => {
    return item.name === 'TV'
})
console.log(foundItems)

items.forEach((item) => {
    console.log(item.name)
})

const someItems = items.some((item) => {
    return item.price > 500
})
console.log(someItems)

const everyItems = items.every((item) => {
    return item.price >= 10
})
console.log(everyItems)

const reducedItems = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)
console.log(reducedItems)


const includesArr = arr.includes(6)
console.log(includesArr)