/*
    서버에서 가지고 있는 데이터
 */

let userList = [
    {
        usercode: 20220001,
        username: "junil",
        password: "1234",
        name: "김준일",
        email: "aaaa@gmail.com",
        role: ["ROLE_ADMIN", "ROLE_USER"],
        porvider: "naver"
    },
    {
        usercode: 20220002,
        username: "junil2",
        password: "1234",
        name: "김준이",
        email: "bbbb@gmail.com",
        role: ["ROLE_ADMIN", "ROLE_USER"],
        porvider: "google"
    },
    {
        usercode: 20220003,
        username: "junil3",
        password: "1234",
        name: "김준삼",
        email: "cccc@gmail.com",
        role: ["ROLE_ADMIN", "ROLE_USER"],
        porvider: "kakao"
    }
];

/*
    클라이언트
*/
const userListloadButton = document.querySelector(".user-list-load-btn");
const userTableList = document.querySelector(".user-table-list");


userListloadButton.onclick = () => {
    // AJAX 통신을 통해 데이터를 서버로부터 받음
    let userJSON = JSON.stringify(userList);

    let userListObj = JSON.parse(userJSON);

    userListObj.forEach(user => {   // 화살표 함수
        userTableList.innerHTML += `
        <tr>
            <td>${user.usercode}</td>
            <td>${user.username}</td>
            <td>${user.password}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role.join(", ")}</td>
            <td>${user.porvider}</td>
        </tr>
        `; 
    });
}





