const n = 5;
function createArray(row) {
    var arr = [];
    for(let i = 0; i < row;i++){
        arr[i] = new Array(row).fill("0");
    }
    return arr
}

const myArr = createArray(5)

for(let i = 0; i < n; i ++){
    for(let j = 0; j < n; j++){
        myArr[i][i] = "*";
        myArr[i][n-1-i]="*"
    }
}
console.log(myArr)

function logMe (name){
    console.log("log" + name)
}
logMe(you)