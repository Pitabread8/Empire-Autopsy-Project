let blurbs = {
    "head": ["technological advances & scientific discoveries","long blurb about head"],
    "arm": ["art, architecture & literature","long blurb about arm"],
    "spine": ["political structure","long blurb about spine"],
    "heart": ["beliefs systems/religions","long blurb about heart"],
    "left-hand": ["Major leaders & their accomplishments - Chandraguptya & Chanakya","long blurb about hand1"],
    "right-hand": ["major leaders & their accomplishments - Asoka","long blurb about hand2"],
    "ribs": ["social structures","long blurb about ribs"],
    "stomach": ["human-environment interaction","long blurb about stomach"],
    "legs": ["labor systems","long blurb about legs"],
    "feet": ["trade (routes & goods)","long blurb about feet"]
}

function divHover() {
    const items = document.getElementsByClassName('grid-item')
    let title = document.getElementById('subheading');
    let text = document.getElementById('text');
    for (i = 0; i < items.length; i++) {
        let div = items[i];
        div.addEventListener('mouseover', () => {
            if (div.classList.length > 1) {
                title.innerText = `${div.classList[1]}: ${blurbs[div.classList[1]][0]}`;
                text.innerText = blurbs[div.classList[1]][1];
            }
        });
    };
}