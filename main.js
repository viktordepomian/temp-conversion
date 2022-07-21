function faToCel(temp){
    let finalTemp = (temp - 32) * .5556;
    console.log(finalTemp.toFixed(1));
}

faToCel(100);

function celToFa(temp){
    let finalTemp = (temp * 1.8) + 32;
    console.log(finalTemp.toFixed(1));
}

celToFa(0)