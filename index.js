function createCircle() {
    let circle = document.createElement('div');
    circle.className = "circle alignCenter justifyCenter";
    return circle;
}

let main = document.getElementById('main');
let temp = createCircle();
temp.innerText = 10;
main.appendChild(temp);