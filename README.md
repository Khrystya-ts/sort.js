let numArr = []
for(let i = 0 ; i < 10; i++) {
    numArr[i] = Math.round(Math.random() * 100 - 50)
}

for(let start = 0; start < numArr.length - 1; start++) {
    for(let i = start + 1; i < numArr.length; i++) {
        if(numArr[start] > numArr[i]) {
            let temp = numArr[start]
            numArr[start] = numArr[i]
            numArr[i] = temp
        }
    }
}
console.log(numArr)
