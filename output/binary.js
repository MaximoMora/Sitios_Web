let array = [1,2,3,4,5,6,7,8,9,10]

function binary(list, target) {
    let mid  = 0
    let min = list[0]
    let max = list[list.length-1]
    while (mid != target) {
        console.log(mid)
        mid = Number((min + max) / 2)
        if (target < mid) {
            max = mid
        } else {
            min = mid
        }

    }

    console.log("Hemos encontrado su numero", mid)
}


binary(array,3)