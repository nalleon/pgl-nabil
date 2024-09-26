function getTable(num){
    let limit = 10;
    let result = "";
    for(let i = 1; i <= limit; i++){
        result += `${num} * ${i} = ${num * i}\n`;;
    }
    
    return result;
}

exports.createTable = getTable;