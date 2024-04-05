const buttonOne = document.getElementsByClassName('button')!;
if(buttonOne)
{
    for (var i =0; i < buttonOne.length; i++) {
			
        buttonOne[i].addEventListener('click',() =>{
        console.log("Clicked !");
    });
    }
}
else
{
    console.log("Button not found!");
}

//test