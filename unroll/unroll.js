function unroll(arr) {
    const newArr = []
    
    while (arr.length !== 0) {

        //Get first row
        newArr.push(arr.shift())

        //Get right col
        let rightCol = arr.map(array => array.pop())
        newArr.push(rightCol)
        
        //Get bottom in reverse
        let bottom = arr.pop()
        if (bottom) bottom.reverse()
        newArr.push(bottom)

        //Get left col from leftovers in reverse
        let left = arr.map(array => array.shift()).reverse()
        newArr.push(left)

    }
    console.log('Unrolled:', newArr.flat())
    return newArr.flat()
}

module.exports = unroll;
