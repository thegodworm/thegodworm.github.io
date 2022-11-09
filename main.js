var lettrine = document.getElementsByClassName('lettrine'); //get class 'lettrine'
lettrine[0].innerHTML = " Flopsgamer"; // change the inside with 'Flopsgamer'

var td = document.getElementsByTagName('td'); //get TAG element 'td'
for(var x in td){  //interation through all elements(x) of 'td'
    td[x].innerHTML = "Ayo da pizza's here"; //replace those elements with 'Ayo de pizza's here'
}

window.onload = function() {
     var pos = 0; 
    //our box element
    var box = document.getElementById('box');
    var t = setInterval(moveLoop, 10);
    var button = document.getElementById('bt');
    
    function moveLoop(){
        while(pos <= 150){
            pos += 1 ;
            box.style.top = pos + "px";

            if( pos >= 150);
            break;
        }
        
    }
};