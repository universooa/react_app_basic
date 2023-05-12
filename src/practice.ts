// eslint-disable-next-line max-classes-per-file
function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0)
}

const total = sumArray([1, 2, 3, 4, 5])

function returnNothing(): void {
    console.log('I am just saying hello world')
}

// shape이라는 interface를 선언
interface Shape {
    getArea(): number // Shape interface에는 getArea라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자임
}

class Circle implements Shape {
    // `implements` 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시
    radius: number

    constructor(radius: number) {
        this.radius = radius
    }

    // 너비를 가져오는 함수
    getArea() {
        return this.radius * this.radius * Math.PI
    }
}

class Rectangle implements Shape {
    width: number

    height: number

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
    }

    getArea(): number {
        return this.width * this.height
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)]

shapes.forEach((shape) => {
    console.log(shape.getArea())
})
