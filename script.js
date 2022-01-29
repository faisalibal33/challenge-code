const c = require ('fs')

const answernum1 = () => {
    c.readFile('./santa.txt', (err, data) => {
        const jarak = data.toString()
        const jarakfloor = jarak.split('') 
        const answer = jarakfloor.reduce((acc, currentValue) => {
            if (currentValue === '('){
                return acc += 1
            }
            else if (currentValue === ')'){
                return acc -= 1
            }
        }, 0)
        console.log("answer 1 = ", answer)
    })
}

answernum1()

const answernum2 = () => {
    c.readFile('./santa.txt', (err, data) => {
        const jarak = data.toString()
        const jarakfloor = jarak.split('') 
        let accumulator = 0
        let counter = 0 
        const answer2 = jarakfloor.some((currentValue) => {
            if (currentValue === '('){
                accumulator += 1
            }
            else if (currentValue === ')'){
                accumulator -= 1
            }
            counter ++
            return accumulator < 0;
        })
        console.log("answer 2 = ", counter)
    })
}
answernum2()