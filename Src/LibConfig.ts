const clickButton = document.getElementsByClassName('button')!;
if(clickButton)
{
    for (var i =0; i < clickButton.length; i++) {
			
    clickButton[i].addEventListener('click',() =>{
        console.log("Clicked !");
    });
    }
}
else
{
    console.log("Button not found!");
}