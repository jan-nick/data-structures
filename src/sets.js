//*  Sets

const mySet = function() {
    let collection = []

    // Check for presence of an element
    this.has = (element) => {
        return (collection.indexOf(element) !== -1)
    }

    // Return all values of the set
    this.values = () => {
        return collection
    }

    // Add element to the set
    this.add = (element) => {
        if(!this.has(element)) {
            collection.push(element)
            return true
        }
        
        return false
    }

    // Remove elemnt from the set
    this.remove = (element) => {
        if(this.has(element)) {
            index = collection.indexOf(element)
            collection.splice(index, 1)
            return true
        }

        return false
    }

    // Return size if the collection
    this.size = () => {
        return collection.length
    }

    // Return union of two sets
    this.union = (otherSet) => {
        let unionSet  = new mySet()
        let firstSet  = this.values()
        let secondSet = otherSet.values()

        firstSet.forEach(e => {
            unionSet.add(e)
        })

        secondSet.forEach(e => {
            unionSet.add(e)
        })

        return unionSet
    }

    // Return intersection of two sets as new set
    this.intersection = (otherSet) => {
        let intersectionSet = new mySet()
        let firstSet = this.values()
        firstSet.forEach(e => {
            if(otherSet.has(e))
                intersectionSet.add(e)
        })
        return intersectionSet
    }

    // Return difference of two sets as a new set
    this.difference = (otherSet) => {
        let differenceSet = new mySet()
        let firstSet = this.values()
        firstSet.forEach(e => {
            if(!otherSet.has(e))
                differenceSet.add(e)
        })
        return differenceSet
    }

    // Test if set is a subset of a different set
    this.subset = (otherSet) => {
        let firstSet = this.values()
        return firstSet.every(value => {
            return otherSet.has(value)
        })
    }

}
