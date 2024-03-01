function changeColors() {
    var hex_numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    var hexcodee = '';
    for (var i = 0; i < 6; i++) {
        var random_ind = Math.floor(Math.random() * hex_numbers.length);
        hexcodee += hex_numbers[random_ind];
    }
    document.getElementById('hexcode').innerHTML = hexcodee;
    document.getElementsByTagName("body")[0].style.background = "#" + hexcodee;
}
