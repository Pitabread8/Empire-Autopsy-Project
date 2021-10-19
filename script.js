// function createDiv() {
//     for (i = 0; i < 24; i++) {
//         let item = document.createElement('div');
//         item.className = "grid-item";
//         item.id = alphabet[i];
//         grid = document.getElementById('grid');
//         grid.appendChild(item);
//     }
//     divHover();
// }

function addNone() {
    let divs = document.getElementsByClassName("grid-item");
    for (i = 0; i < divs.length; i++) {
        divs[i].style.boxShadow = "initial";
    }
}

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

let blurbs = {
    "head": "long blurb about head"
}