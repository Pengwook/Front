let add2 = function(x, y) {  /* 익명함수 */ /* 변수는 선언이 되있어야 사용가능 */
return x + y;
}

main(); /* 메인함수 호출 */

function add(x, y) {    
    return x + y;
}

function main() {
    let num1 = 10;
    let num2 = 20;

    let result = add(num1, num2);
    console.log("결과: " + result)

    result = add2(num1, num2);
    console.log("결과2: " + result);

    result = function(x, y) {return x + y}(num1, num2); /* result에다가 바로 넣은것 */
    console.log("결과3: " + result);
}


