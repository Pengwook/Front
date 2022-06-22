let year = 1;

let studentObj = {
    name: "김준일",
    schoolName: "코리아아이티아카데미",
    hobby: ["축구", "농구", "골프"],
    info: { // 이렇게 안에도 객체가 들어올수있음.
        "year": year,   // 얘는 json으로 바꿀때 위에 표시됨.
        group: 2,
        number: 3
    }
};

console.log(studentObj.name);

for(let i = 0; i < studentObj.hobby.length; i++) {
    console.log(studentObj.hobby[i]);
}

console.log(studentObj.info.year);

console.log("학생객체" + studentObj);

/*
JSON 형변환
1. Object -> JSON => JSON.stringify(객체); 오브젝트를 JSON 문자열로 변환해줌.
2. JSON -> Object => JSON.parse(JSON); JSON 문자열을 오브젝트(객체)로 변환해줌.
stringify -> 문자열로 변환한다라는 뜻 -> 오로지 변환대는 시점의 데이터를 가지고 변환댐
undefined -> 초기화가 되지않았을때 뜸
*/

let jsonData = JSON.stringify(studentObj);

console.log("JSON으로 변환" + jsonData);

let jsonObj = JSON.parse(jsonData);

console.log(jsonObj.name); 