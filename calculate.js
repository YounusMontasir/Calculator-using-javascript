let screen= document.getElementById('screen');
function num(number){
          screen.value += number;
}
function clr(){
    screen.value = "";
}
function res(){
      let y= screen.value;
      screen.value=eval(y);
      
}
