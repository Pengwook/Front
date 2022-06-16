function add(x, y) {
    return x + y;
}

let result = add(10, 20);

console.log(result);

/////////////////////////////////////////////////////////////////

let result2 = function (x, y) { /* 익명함수 만들기: 변수에다가 함수를 넣은것 */
    return x + y;   
}

console.log(result2(10, 20));

//////////////////////////////////////////////////////////////////

console.log(function (x, y) {   
    return x + y;
}(10,20));


//////////////////////////////////////////////////////////////////

let result3 = (x, y) => {   /* 화살표 함수 : 위에 function이 화살표로 바뀌 느낌 */
    return x + y;
}

console.log(result3(20, 30));