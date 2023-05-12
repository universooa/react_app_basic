let count = 0
count += 1
// count = '갑자기 분위기 문자열'

const message: string = 'hello world'
const done: boolean = true

const numbers: number[] = [1, 2, 3]
const messages: string[] = ['hello', 'world']

// messages.push(1) // 숫자 넣으려고 하면 안됨

const mightBeUndefined: string | undefined = undefined // string일수도 있고 undefined일수도 있음
const nullableNumber: number | null = null // number일수도 있고 null일수도 있음

let color: 'red' | 'orange' | 'yellow' = 'red'
color = 'yellow'
// color = 'green' //에러
