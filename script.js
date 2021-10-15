function createDiv() {
    // grid size number
    for (i = 0; i < 24; i++) {
        let item = document.createElement('div');
        item.className = "grid-item";
        item.id = i;
        grid = document.getElementById('grid');
        grid.appendChild(item);
        // grid style
    }
    // clearDiv();
    divHover();
    // gridlines + enhancement options
}

function addNone() {
    let divs = document.getElementsByClassName("grid-item");
    for (i = 0; i < divs.length; i++) {
        divs[i].style.boxShadow = "initial";
    }
}

// add gridlines + enhancements

function divHover() {
    const items = document.getElementsByClassName('grid-item');
    for (i = 0; i < items.length; i++) {
        let div = items[i];
        div.addEventListener('mouseover', () => {
            // change ink
            div.style.backgroundColor = "#000";;
        });
    };
}

// reset grid color