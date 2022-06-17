const box1 = document.querySelector(".box1");
const btn1 = document.querySelector(".btn1");   
const box2 = document.querySelector(".box2")
const btn2 = document.querySelector(".btn2");

// btn1.onclick = c;    이거를 화살표함수로 바꾼게 밑

// function c () {
//     box1.classList.toggle("box-resize");
// }

btn1.onclick = () => {
    box1.classList.toggle("box-resize");
}

btn2.onclick = () => {
    box2.classList.toggle("box-bg-change");
}

box1.onmouseover = () => {
    box1.classList.toggle("box.bg.change");
}

box1.onmouseout = () => {
    box1.classList.toggle("box-bg-change");
}