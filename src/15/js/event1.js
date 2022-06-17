const box1 = document.querySelector(".box1");   /* .찍었으면 class #찍었으면 id */
const changeBtn = document.querySelector(".change-btn");

changeBtn.onclick = () => { /* changeBth을 클릭할때마다 함수 호출 */
    box1.classList.toggle("bg-color");  /* classList -> 배열, toggle -> 호출할때마다 바뀌는것 */
}

