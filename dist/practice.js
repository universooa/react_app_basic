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
    constructor(radius) {
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
    }
    getArea() {
        return this.width * this.height
    }
}
const shapes = [new Circle(5), new Rectangle(10, 5)]
shapes.forEach((shape) => {
    console.log(shape.getArea())
})
