function findMinAndRemove(array){
    let min = array[0]
    let index = 0
    debugger
    for(let i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i]
            index = i
        }
    }
    array.splice(index, 1)
    return min
}

function insertionSort(array){
    let sorted = []
    let smallest = 0
    while(array.length > 0){
        smallest = findMinAndRemove(array)
        sorted.push(smallest)
    }
    return sorted
}
