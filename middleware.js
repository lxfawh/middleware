class Express {

    constructor() {
        this.middlewares = []
    }

    use(...arg) {
        this.middlewares.push(...arg)
        this.next()
    }

    next() {
        let reduce = () => {
            if (this.middlewares.length > 0) {
                let middleware = this.middlewares.shift()
                middleware.call(this, reduce.bind(this))
            }
        }
        reduce()
    }
}

let app = new Express()

let m1 = next => {
    console.log('m1')
    next()
}
let m2 = next => {
    console.log('m2')
    next()
}
let m3 = next => {
    console.log('m3')
    next()
}
let m4 = next => {
    console.log('m4')
    next()
}
let m5 = next => {
    console.log('m5')
    next()
}

app.use(m1, m2, m3, m4, m5, () => {
    console.log('result')
})


