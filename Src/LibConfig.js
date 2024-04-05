var clickButton = document.getElementsByClassName('button');
if (clickButton) {
    for (var i = 0; i < clickButton.length; i++) {
        clickButton[i].addEventListener('click', function () {
            console.log("Clicked !");
        });
    }
}
else {
    console.log("Button not found!");
}
