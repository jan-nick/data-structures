// * Stacks

// functions: push, pop, peek, length



// Palindrome checker

const palindromeChecker = word => {
    let rword = ''
    let letters = []

    for(let i = 0; i < word.length; i++) {
        letters.push(word[i])
    }

    for(let i = 0; i < word.length; i++) {
        rword += letters.pop()
    }

    if(rword === word)
        console.log(`${word} is a Palindrome`)
    else
        console.log(`${word} is not a Palindrome`)
}

palindromeChecker('racecar')



// Create a stack

const Stack = function() {
    this.count = 0
    this.storage = {}

    // Add value onto end of stack
    this.push = (value) => {
        this.storage[this.count] = value
        this.count++
    }

    // Remove and return value at end of stack
    this.pop = () => {
        if (this.count === 0)
            return undefined

        this.count--
        let result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    this.size = () => {
        return this.count
    }

    // Return value at the end of stack
    this.peek = () => {
        return this.storage[this.count - 1]
    }
}

let myStack = new Stack()