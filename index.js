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

function getMaxLeaves (level) {
    return Math.pow(2,level);
}

function prevLevelCount (level) {
    if(level <= 0) return 0;
    let val = 0;
    while(level) val += getMaxLeaves(--level);
    return val;
}

function createTree(values) {
    let level = 0;
    let maxLeaves = getMaxLeaves(level);
    let row = createRow();

    for(let i=0;i<values.length;i++) {
        if((i-prevLevelCount(level))==maxLeaves(level)) {
            main.appendChild(row);
            row = createRow();
            level++;
        }
        let circle = createCircle(values[i]);
        row.appendChild(circle);
    }

    let prevLevelCount = getPrevLevelCount(level);
    

    let temp = createRow(createCircle(10));
    main.appendChild(temp);
    temp = createRow(createCircle(15));
    temp.appendChild(createCircle(20));
    main.appendChild(temp);
}

function main() {
    let main = document.getElementById('main');
    createTree([1,2,3,4,5,6,7,8,9,10])
}

main();

