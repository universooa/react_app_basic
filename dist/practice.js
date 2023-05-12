'use strict'
// eslint-disable-next-line max-classes-per-file
function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0)
}
const total = sumArray([1, 2, 3, 4, 5])
function returnNothing() {
    console.log('I am just saying hello world')
}
class Circle {
    // `implements` 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시
    constructor(radius) {
        this.radius = radius
        this.radius = radius
    }
    // 너비를 가져오는 함수
    getArea() {
        return this.radius * this.radius * Math.PI
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.width = width
        this.height = height
    }
    getArea() {
        return this.width * this.height
    }
}
const shapes = [new Circle(5), new Rectangle(10, 5)]
shapes.forEach((shape) => {
    console.log(shape.getArea())
})
const person = {
    name: '수아',
    age: 20,
}
const expert = {
    name: '경수',
    skills: ['javascript', 'react'],
}
const people = [person, expert]
const color = 'red'
const colors = ['red', 'orange']
// Generics 사용
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b)
}
const merged = merge({ foo: 1 }, { bar: 1 })
function wrap(param) {
    return {
        param,
    }
}
const wrapped = wrap(10)
const items = {
    list: ['a', 'b', 'c'],
}
class Queue {
    constructor() {
        this.list = []
    }
    get length() {
        return this.list.length
    }
    enqueue(item) {
        this.list.push(item)
    }
    dequeue() {
        return this.list.shift()
    }
}
const queue = new Queue()
queue.enqueue(0)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
