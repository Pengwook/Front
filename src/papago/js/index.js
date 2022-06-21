const brandLogo = document.querySelector(".brand-logo-border");
const convertButton = document.querySelector(".article-footer button")
const textarea = document.querySelector(".article-body-textarea textarea");
const pre = document.querySelector(".article-body pre");
const inputUrl = document.querySelector("#web-url");
const linkButton = document.querySelector(".button-url button");

brandLogo.onclick = () => {
    // alert("로고 클릭 되었음.");
    //location.href = "https://papago.naver.com"; // 히스토리 데이터가 쌓여서 뒤로가기가 가능함.
    //location.replace("https://papago.naver.com");   // 히스토리가 날아가서 뒤로가기가 불가능함. 
    // 이전 페이지로 갈 일이 없을때는 replace. ex) 회원가입이 완료되었을때
    location.href = "http://127.0.0.1:5500/git/Front/src/papago/historyback.html";
}   

convertButton.onclick = () => {
    // alert(textarea.value);
    pre.textContent = textarea.value; // textarea가 가지고 있는 value를 pre에 가져오기
}

textarea.onkeyup = () => {  // 키보드이벤트
    pre.textContent = textarea.value;
}

linkButton.onclick = () => {
    let protocols = new Array();
    protocols.push("http://");
    protocols.push("https://");

    for(let i = 0; i < protocols.length; i++) {
        if(inputUrl.value.includes(protocols[i])) {
            location.href = inputUrl.value;
            return;
        }
    }
    location.href = "https://" + inputUrl.value;
}

inputUrl.onkeypress = () => {
    if(window.event.keyCode == 13) {
        linkButton.click(); // 위에 버튼을 클릭하는것(onclick)과 동일하게
    }   // 다른것들도 가능함 ex) onkeyup이면 keyup();
}   
