var index = 0;

function changeColors() {
    var colors = ["red", "orange", "yellow", "blue", "yellow", "purple","#09ffgg"];
    document.getElementsByTagName("body")[0].style.background = colors[index];
    index++;
    if (index > colors.length - 1) {
        index = 0;
    }
}
