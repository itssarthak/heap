let main = document.getElementById('main');
let circle = document.createElement('div');
circle.class = "circle";
let temp = circle.cloneNode(true);
temp.innerText = 10;
main.appendChild(temp);