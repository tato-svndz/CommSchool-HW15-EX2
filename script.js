function clear(elem) {
    while (elem.hasChildNodes() === true) {
        elem.removeChild(elem.firstChild);
    }
}

let list = document.getElementById('list');
clear(list);