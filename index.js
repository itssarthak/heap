function createCircle(text) {
    let circle = document.createElement('div');
    circle.className = "circle alignCenter justifyCenter";
    if(text || text == 0) circle.innerText = text;
    circle.style.margin='10px';
    return circle;
}

function createRow(child) {
    let row = document.createElement('div');
    row.className = "row justifyCenter";
    if(child) row.appendChild(child);
    return row;
}

function main() {
    let main = document.getElementById('main');
    let temp = createRow(createCircle(10));
    main.appendChild(temp);
    temp = createRow(createCircle(15));
    temp.appendChild(createCircle(20));
    main.appendChild(temp);
}

main();

